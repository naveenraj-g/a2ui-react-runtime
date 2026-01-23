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
import type { DateTimeInputNode } from "./types";
import type { MessageProcessor } from "./processor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface DateTimeInputProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: DateTimeInputNode;
  weight?: string | number;
}

export function DateTimeInput({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: DateTimeInputProps) {
  const { resolvePrimitive } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  const initialValue = useMemo(
    () => resolvePrimitive(component.properties.value) || "",
    [resolvePrimitive, component.properties.value],
  );
  const [value, setValue] = useState(initialValue);
  const label = useMemo(
    () => resolvePrimitive(component.properties.label),
    [resolvePrimitive, component.properties.label],
  );
  const enableDate = component.properties.enableDate !== false;
  const enableTime = component.properties.enableTime !== false;

  const type = "datetime-local";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="space-y-2" style={{ flex: weight }}>
      {label && <Label htmlFor={component.id}>{label}</Label>}
      <Input
        id={component.id}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}
