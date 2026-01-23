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
import type { TableNode } from "./types";
import type { MessageProcessor } from "./processor";
import {
  Table as ShadCNTable,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface TableProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: TableNode;
  weight?: string | number;
}

export function Table({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: TableProps) {
  const { theme } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  return (
    <div style={{ flex: weight, overflowX: "auto" }}>
      <ShadCNTable>
        <TableHeader>
          <TableRow>
            {component.properties.headers.map((header, index) => (
              <TableHead key={index}>{header}</TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {component.properties.data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </ShadCNTable>
    </div>
  );
}
