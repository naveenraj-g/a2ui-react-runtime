import type {
  AnyComponentNode,
  A2UIClientEventMessage,
  ServerToClientMessage,
} from "./types";
import type { MessageProcessor } from "./processor";
import { DEFAULT_THEME } from "./theme";

let idCounter = 0;

export abstract class DynamicComponent<
  T extends AnyComponentNode = AnyComponentNode,
> {
  protected processor: MessageProcessor;
  protected theme = DEFAULT_THEME;

  readonly surfaceId: string;
  readonly component: T;
  readonly weight: string | number;

  constructor(
    processor: MessageProcessor,
    surfaceId: string,
    component: T,
    weight: string | number = "initial",
  ) {
    this.processor = processor;
    this.surfaceId = surfaceId;
    this.component = component;
    this.weight = weight;
  }

  protected sendAction(action: any): Promise<ServerToClientMessage[]> {
    const context: Record<string, unknown> = {};

    if (action.context) {
      for (const item of action.context) {
        if (item.value.literalBoolean !== undefined) {
          context[item.key] = item.value.literalBoolean;
        } else if (item.value.literalNumber !== undefined) {
          context[item.key] = item.value.literalNumber;
        } else if (item.value.literalString !== undefined) {
          context[item.key] = item.value.literalString;
        } else if (item.value.literal !== undefined) {
          context[item.key] = item.value.literal;
        } else if (item.value.path) {
          const path = this.processor.resolvePath(
            item.value.path,
            this.component.dataContextPath,
          );
          const value = this.processor.getData(
            this.component,
            path,
            this.surfaceId,
          );
          context[item.key] = value;
        }
      }
    }

    const message: A2UIClientEventMessage = {
      userAction: {
        name: action.name,
        sourceComponentId: this.component.id,
        surfaceId: this.surfaceId,
        timestamp: new Date().toISOString(),
        context,
      },
    };

    return this.processor.dispatch(message);
  }

  protected resolvePrimitive(value: any): any {
    if (!value || typeof value !== "object") {
      return null;
    } else if (value.literal !== undefined) {
      return value.literal;
    } else if (value.literalString !== undefined) {
      return value.literalString;
    } else if (value.literalNumber !== undefined) {
      return value.literalNumber;
    } else if (value.literalBoolean !== undefined) {
      return value.literalBoolean;
    } else if (value.path) {
      return this.processor.getData(this.component, value.path, this.surfaceId);
    }

    return null;
  }

  protected getUniqueId(prefix: string) {
    return `${prefix}-${idCounter++}`;
  }
}
