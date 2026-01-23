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
import type { VideoNode } from "./types";
import type { MessageProcessor } from "./processor";

interface VideoProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: VideoNode;
  weight?: string | number;
}

export function Video({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: VideoProps) {
  const { resolvePrimitive } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  const url = useMemo(
    () => resolvePrimitive(component.properties.url),
    [resolvePrimitive, component.properties.url],
  );

  if (!url) {
    return null;
  }

  return (
    <video
      src={url}
      controls
      className="w-full h-auto"
      style={{ flex: weight }}
    />
  );
}
