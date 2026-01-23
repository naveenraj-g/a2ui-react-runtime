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
import type { IconNode } from "./types";
import type { MessageProcessor } from "./processor";

interface IconProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: IconNode;
  weight?: string | number;
}

export function Icon({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: IconProps) {
  const { resolvePrimitive } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  const name = useMemo(
    () => resolvePrimitive(component.properties.name),
    [resolvePrimitive, component.properties.name],
  );
  const size = component.properties.size || "medium";

  const sizeClass = useMemo(() => {
    switch (size) {
      case "small":
        return "w-4 h-4";
      case "medium":
        return "w-6 h-6";
      case "large":
        return "w-8 h-8";
      default:
        return "w-6 h-6";
    }
  }, [size]);

  if (!name) {
    return null;
  }

  // For simplicity, we'll use emoji as fallback for missing icons
  const iconMap: Record<string, string> = {
    flight: "✈️",
    check_circle: "✅",
    check: "✓",
    close: "✕",
    menu: "☰",
    search: "🔍",
    home: "🏠",
    settings: "⚙️",
    person: "👤",
    email: "📧",
    phone: "📱",
    map: "🗺️",
  };

  return (
    <span className={`${sizeClass} text-gray-700`} style={{ flex: weight }}>
      {iconMap[name] || "❓"}
    </span>
  );
}
