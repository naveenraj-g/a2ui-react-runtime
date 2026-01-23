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
import type { TextFieldNode } from "./types";
import type { MessageProcessor } from "./processor";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface TextFieldProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: TextFieldNode;
  weight?: string | number;
}

export function TextField({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: TextFieldProps) {
  const { resolvePrimitive } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  const initialText = useMemo(
    () => resolvePrimitive(component.properties.text) || "",
    [resolvePrimitive, component.properties.text],
  );
  const [text, setText] = useState(initialText);
  const label = useMemo(
    () => resolvePrimitive(component.properties.label),
    [resolvePrimitive, component.properties.label],
  );
  const placeholder = useMemo(
    () => resolvePrimitive(component.properties.placeholder),
    [resolvePrimitive, component.properties.placeholder],
  );
  const textFieldType = component.properties.textFieldType || "shortText";

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setText(e.target.value);
  };

  if (textFieldType === "longText") {
    return (
      <div className="space-y-2" style={{ flex: weight }}>
        {label && <Label htmlFor={component.id}>{label}</Label>}
        <Textarea
          id={component.id}
          value={text}
          onChange={handleChange}
          placeholder={placeholder}
          className="resize-none"
        />
      </div>
    );
  }

  const inputType =
    textFieldType === "obscured"
      ? "password"
      : textFieldType === "number"
        ? "number"
        : "text";

  return (
    <div className="space-y-2" style={{ flex: weight }}>
      {label && <Label htmlFor={component.id}>{label}</Label>}
      <Input
        id={component.id}
        type={inputType}
        value={text}
        onChange={handleChange}
        placeholder={placeholder}
      />
    </div>
  );
}
