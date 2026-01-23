import type {
  AnyComponentNode,
  ServerToClientMessage,
  A2UIClientEventMessage,
  DataValue,
} from "./types";

export interface IMessageProcessor {
  getSurfaces(): ReadonlyMap<string, Surface>;
  clearSurfaces(): void;
  processMessages(messages: ServerToClientMessage[]): void;
  getData(
    node: AnyComponentNode,
    relativePath: string,
    surfaceId: string,
  ): DataValue | null;
  setData(
    node: AnyComponentNode | null,
    relativePath: string,
    value: DataValue,
    surfaceId: string,
  ): void;
  resolvePath(path: string, dataContextPath?: string): string;
  dispatch(message: A2UIClientEventMessage): Promise<ServerToClientMessage[]>;
}

export interface Surface {
  rootComponentId: string;
  components: Map<string, any>;
  dataModel: Map<string, DataValue>;
  styles: Record<string, string>;
}

export class MessageProcessor implements IMessageProcessor {
  private surfaces = new Map<string, Surface>();
  readonly events = new EventTarget();

  getSurfaces(): ReadonlyMap<string, Surface> {
    return this.surfaces;
  }

  clearSurfaces(): void {
    this.surfaces.clear();
  }

  processMessages(messages: ServerToClientMessage[]): void {
    for (const message of messages) {
      if (message.beginRendering) {
        const { surfaceId, root, styles } = message.beginRendering;
        this.surfaces.set(surfaceId, {
          rootComponentId: root,
          components: new Map(),
          dataModel: new Map(),
          styles: styles || {},
        });
      } else if (message.surfaceUpdate) {
        const { surfaceId, components } = message.surfaceUpdate;
        const surface = this.surfaces.get(surfaceId);
        if (surface) {
          for (const component of components) {
            surface.components.set(component.id, component);
          }
        }
      } else if (message.dataModelUpdate) {
        const { surfaceId, path = "", contents } = message.dataModelUpdate;
        const surface = this.surfaces.get(surfaceId);
        if (surface) {
          this.updateDataModel(surface.dataModel, path, contents);
        }
      } else if (message.deleteSurface) {
        this.surfaces.delete(message.deleteSurface.surfaceId);
      }
    }
  }

  private updateDataModel(
    dataModel: Map<string, DataValue>,
    basePath: string,
    contents: Array<{
      key: string;
      valueString?: string;
      valueNumber?: number;
      valueBoolean?: boolean;
      valueMap?: any[];
    }>,
  ): void {
    const parts = basePath.split("/").filter(Boolean);
    let current: any = dataModel;

    for (const part of parts) {
      if (!current[part]) {
        current[part] = new Map();
      }
      current = current[part];
    }

    for (const item of contents) {
      let value: DataValue;
      if (item.valueString !== undefined) {
        try {
          value = JSON.parse(item.valueString);
        } catch {
          value = item.valueString;
        }
      } else if (item.valueNumber !== undefined) {
        value = item.valueNumber;
      } else if (item.valueBoolean !== undefined) {
        value = item.valueBoolean;
      } else if (item.valueMap) {
        const map = new Map<string, DataValue>();
        this.updateDataModel(map, "", item.valueMap);
        value = map;
      } else {
        value = null;
      }

      current[item.key] = value;
    }
  }

  getData(
    node: AnyComponentNode,
    relativePath: string,
    surfaceId: string,
  ): DataValue | null {
    const surface = this.surfaces.get(surfaceId);
    if (!surface) return null;

    const resolvedPath = this.resolvePath(relativePath, node.dataContextPath);
    const parts = resolvedPath.split("/").filter(Boolean);
    let current: any = surface.dataModel;

    for (const part of parts) {
      if (!current || !("has" in current && current.has(part))) {
        return null;
      }
      current = current.get(part);
    }

    return current;
  }

  setData(
    node: AnyComponentNode | null,
    relativePath: string,
    value: DataValue,
    surfaceId: string,
  ): void {
    const surface = this.surfaces.get(surfaceId);
    if (!surface) return;

    const resolvedPath = this.resolvePath(relativePath, node?.dataContextPath);
    const parts = resolvedPath.split("/").filter(Boolean);
    let current: any = surface.dataModel;

    for (let i = 0; i < parts.length - 1; i++) {
      const part = parts[i];
      if (!current[part]) {
        current[part] = new Map();
      }
      current = current[part];
    }

    const lastPart = parts[parts.length - 1];
    current[lastPart] = value;
  }

  resolvePath(path: string, dataContextPath?: string): string {
    if (path.startsWith("/")) {
      return path;
    }
    return dataContextPath
      ? `${dataContextPath}/${path}`.replace(/\/+/g, "/")
      : path;
  }

  dispatch(message: A2UIClientEventMessage): Promise<ServerToClientMessage[]> {
    return new Promise((resolve) => {
      const event = new CustomEvent<{
        message: A2UIClientEventMessage;
        resolve: (messages: ServerToClientMessage[]) => void;
      }>("dispatch", { detail: { message, resolve } });
      this.events.dispatchEvent(event);
    });
  }
}

export interface DispatchedEvent {
  message: A2UIClientEventMessage;
  completion: (messages: ServerToClientMessage[]) => void;
}
