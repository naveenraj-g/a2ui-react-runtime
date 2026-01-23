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

import { useState, useMemo } from "react";
import { useDynamicComponent } from "./use-dynamic-component";
import type { CheckboxNode } from "./types";
import type { MessageProcessor } from "./processor";
import { Checkbox as ShadCNCheckbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: CheckboxNode;
  weight?: string | number;
}

export function Checkbox({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: CheckboxProps) {
  const { resolvePrimitive } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  const initialValue = useMemo(
    () => Boolean(resolvePrimitive(component.properties.value)),
    [resolvePrimitive, component.properties.value],
  );
  const [checked, setChecked] = useState(initialValue);
  const label = useMemo(
    () => resolvePrimitive(component.properties.label),
    [resolvePrimitive, component.properties.label],
  );

  const handleChange = (checked: boolean) => {
    setChecked(checked);
  };

  return (
    <div className="flex items-center space-x-2" style={{ flex: weight }}>
      <ShadCNCheckbox
        id={component.id}
        checked={checked}
        onCheckedChange={handleChange}
      />
      {label && <Label htmlFor={component.id}>{label}</Label>}
    </div>
  );
}
