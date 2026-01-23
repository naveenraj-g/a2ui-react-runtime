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
import type { MultipleChoiceNode } from "./types";
import type { MessageProcessor } from "./processor";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface MultipleChoiceProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: MultipleChoiceNode;
  weight?: string | number;
}

export function MultipleChoice({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: MultipleChoiceProps) {
  const { resolvePrimitive } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  const options =
    component.properties.options || component.properties.items || [];
  const initialValue = useMemo(
    () =>
      resolvePrimitive(component.properties.value) ||
      resolvePrimitive(component.properties.selections) ||
      "",
    [
      resolvePrimitive,
      component.properties.value,
      component.properties.selections,
    ],
  );
  const [selectedValue, setSelectedValue] = useState(initialValue);

  const handleChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div style={{ flex: weight }}>
      <Select value={selectedValue} onValueChange={handleChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((option, index) => {
            const label = resolvePrimitive(option.label);
            const value = option.value;
            return (
              <SelectItem key={index} value={value}>
                {label}
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
