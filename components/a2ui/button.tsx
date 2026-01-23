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
import type { ButtonNode } from "./types";
import type { MessageProcessor } from "./processor";
import { Renderer } from "./renderer";
import { Button as ShadCNButton } from "@/components/ui/button";

interface ButtonProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: ButtonNode;
  weight?: string | number;
}

export function Button({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: ButtonProps) {
  const { sendAction } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  const handleClick = async () => {
    if (component.properties.action) {
      await sendAction(component.properties.action);
    }
  };

  const variant = component.properties.primary ? "default" : "secondary";

  return (
    <ShadCNButton
      variant={variant}
      onClick={handleClick}
      className="flex items-center justify-center"
      style={{ flex: weight }}
    >
      {component.properties.child && (
        <Renderer
          processor={processor}
          surfaceId={surfaceId}
          component={component.properties.child}
        />
      )}
    </ShadCNButton>
  );
}
