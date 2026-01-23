/*
  Copyright 2025 Google LLC

  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at

       https://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
  */

import { useMemo } from "react";
import type {
  AnyComponentNode,
  A2UIClientEventMessage,
  ServerToClientMessage,
} from "./types";
import type { MessageProcessor } from "./processor";
import { DEFAULT_THEME } from "./theme";

let idCounter = 0;

export function useDynamicComponent(
  processor: MessageProcessor,
  surfaceId: string,
  component: AnyComponentNode,
  weight: string | number = "initial",
) {
  const theme = DEFAULT_THEME;

  const sendAction = async (action: any): Promise<ServerToClientMessage[]> => {
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
          const path = processor.resolvePath(
            item.value.path,
            component.dataContextPath,
          );
          const value = processor.getData(component, path, surfaceId);
          context[item.key] = value;
        }
      }
    }

    const message: A2UIClientEventMessage = {
      userAction: {
        name: action.name,
        sourceComponentId: component.id,
        surfaceId: surfaceId,
        timestamp: new Date().toISOString(),
        context,
      },
    };

    return processor.dispatch(message);
  };

  const resolvePrimitive = (value: any): any => {
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
      return processor.getData(component, value.path, surfaceId);
    }

    return null;
  };

  const getUniqueId = (prefix: string) => {
    return `${prefix}-${idCounter++}`;
  };

  return useMemo(
    () => ({
      theme,
      sendAction,
      resolvePrimitive,
      getUniqueId,
    }),
    [processor, surfaceId, component, weight],
  );
}
