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

import { useDynamicComponent } from "./use-dynamic-component";
import type { ListNode } from "./types";
import type { MessageProcessor } from "./processor";
import { Renderer } from "./renderer";

interface ListProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: ListNode;
  weight?: string | number;
}

export function List({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: ListProps) {
  const { theme } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  const direction = component.properties.direction || "vertical";

  const containerClass =
    direction === "horizontal" ? "flex flex-row" : "flex flex-col";

  return (
    <div className={`${containerClass} gap-2`} style={{ flex: weight }}>
      {component.properties.children?.map((child) => (
        <Renderer
          key={child.id}
          processor={processor}
          surfaceId={surfaceId}
          component={child}
          weight={child.weight || "initial"}
        />
      ))}
    </div>
  );
}
