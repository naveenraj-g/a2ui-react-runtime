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
import type { ImageNode } from "./types";
import type { MessageProcessor } from "./processor";

interface ImageProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: ImageNode;
  weight?: string | number;
}

export function Image({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: ImageProps) {
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
  const fit = component.properties.fit || "cover";
  const usageHint = component.properties.usageHint || "default";
  const altText = useMemo(
    () => resolvePrimitive(component.properties.altText) || "Image",
    [resolvePrimitive, component.properties.altText],
  );

  const styles = useMemo(() => {
    const objectFitMap: Record<string, string> = {
      cover: "object-cover",
      contain: "object-contain",
      fill: "object-fill",
      none: "object-none",
      scaleDown: "object-scale-down",
    };

    let sizeClass = "";
    switch (usageHint) {
      case "avatar":
        sizeClass = "w-12 h-12 rounded-full";
        break;
      case "icon":
        sizeClass = "w-6 h-6";
        break;
      case "smallFeature":
        sizeClass = "w-32 h-24";
        break;
      case "mediumFeature":
        sizeClass = "w-64 h-48";
        break;
      case "largeFeature":
        sizeClass = "w-full h-96";
        break;
      case "header":
        sizeClass = "w-full h-64";
        break;
      default:
        sizeClass = "w-full h-auto";
        break;
    }

    return `${objectFitMap[fit]} ${sizeClass}`;
  }, [fit, usageHint]);

  if (!url) {
    return null;
  }

  return (
    <img src={url} alt={altText} className={styles} style={{ flex: weight }} />
  );
}
