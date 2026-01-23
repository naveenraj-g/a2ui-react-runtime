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
import type { DividerNode } from "./types";
import type { MessageProcessor } from "./processor";
import { Separator } from "@/components/ui/separator";

interface DividerProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: DividerNode;
  weight?: string | number;
}

export function Divider({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: DividerProps) {
  const { theme } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );
  const axis = component.properties.axis || "horizontal";

  const orientation = useMemo(
    () => (axis === "horizontal" ? "horizontal" : "vertical"),
    [axis],
  );

  return <Separator orientation={orientation} style={{ flex: weight }} />;
}
