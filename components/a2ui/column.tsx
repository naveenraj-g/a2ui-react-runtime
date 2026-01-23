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
import { useDynamicComponent } from "./use-dynamic-component";
import type { ColumnNode } from "./types";
import type { MessageProcessor } from "./processor";
import { Renderer } from "./renderer";

interface ColumnProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: ColumnNode;
  weight?: string | number;
}

export function Column({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: ColumnProps) {
  const { theme } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  const alignment = component.properties.alignment || "stretch";
  const distribution = component.properties.distribution || "start";
  const gap = component.properties.gap || "medium";

  const styles = useMemo(() => {
    const alignMap: Record<string, string> = {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    };

    const distributeMap: Record<string, string> = {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      spaceBetween: "justify-between",
      spaceAround: "justify-around",
      spaceEvenly: "justify-evenly",
    };

    const gapMap: Record<string, string> = {
      none: "gap-0",
      small: "gap-2",
      medium: "gap-4",
      large: "gap-8",
    };

    return `${alignMap[alignment]} ${distributeMap[distribution]} ${gapMap[gap]}`;
  }, [alignment, distribution, gap]);

  return (
    <div
      className={`flex flex-col w-full min-h-full box-sizing: border-box ${styles}`}
      style={{ flex: weight }}
    >
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
