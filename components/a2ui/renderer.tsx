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

import { DEFAULT_CATALOG } from "./catalog";
import type { AnyComponentNode } from "./types";
import type { MessageProcessor } from "./processor";

interface RendererProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: AnyComponentNode;
  weight?: string | number;
}

export function Renderer({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: RendererProps) {
  const config = DEFAULT_CATALOG[component.type];

  if (!config) {
    console.warn(`Unknown component type: ${component.type}`);
    return null;
  }

  const Component = config.component;

  return (
    <Component
      processor={processor}
      surfaceId={surfaceId}
      component={component}
      weight={weight}
    />
  );
}
