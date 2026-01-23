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
import type { TabsNode } from "./types";
import type { MessageProcessor } from "./processor";
import {
  Tabs as ShadCNTabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Renderer } from "./renderer";

interface TabsProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: TabsNode;
  weight?: string | number;
}

export function Tabs({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: TabsProps) {
  const { resolvePrimitive } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );
  const [activeTab, setActiveTab] = useState(0);

  const tabItems = component.properties.tabItems || [];

  return (
    <div style={{ flex: weight }}>
      <ShadCNTabs
        value={activeTab.toString()}
        onValueChange={(value) => setActiveTab(parseInt(value))}
      >
        <TabsList>
          {tabItems.map((tab, index) => {
            const title = resolvePrimitive(tab.title);
            return (
              <TabsTrigger key={index} value={index.toString()}>
                {title}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {tabItems.map((tab, index) => (
          <TabsContent key={index} value={index.toString()}>
            {typeof tab.child === "string" ? (
              <p>Component not found: {tab.child}</p>
            ) : (
              tab.child && (
                <Renderer
                  processor={processor}
                  surfaceId={surfaceId}
                  component={tab.child}
                />
              )
            )}
          </TabsContent>
        ))}
      </ShadCNTabs>
    </div>
  );
}
