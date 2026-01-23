"use client";

import { useState, useMemo } from "react";
import { MessageProcessor } from "@/components/a2ui/processor";
import { Renderer } from "@/components/a2ui/renderer";
import type { AnyComponentNode } from "@/components/a2ui/types";

const processor = new MessageProcessor();

// Mock table components
const TABLE_COMPONENTS: any = {
  id: "table-container",
  type: "Card",
  properties: {
    child: {
      id: "table",
      type: "Table",
      properties: {
        headers: ["Name", "Email", "Role", "Status", "Actions"],
        data: [
          ["John Doe", "john@example.com", "Admin", "Active", "View"],
          ["Jane Smith", "jane@example.com", "Editor", "Inactive", "Edit"],
          ["Bob Johnson", "bob@example.com", "Viewer", "Active", "Delete"],
          ["Alice Williams", "alice@example.com", "Editor", "Active", "View"],
          ["Mike Brown", "mike@example.com", "Viewer", "Inactive", "Edit"],
        ],
      },
    },
  },
};

export default function TablesPage() {
  const [data, setData] = useState<string[][]>([
    ["John Doe", "john@example.com", "Admin", "Active", "View"],
    ["Jane Smith", "jane@example.com", "Editor", "Inactive", "Edit"],
    ["Bob Johnson", "bob@example.com", "Viewer", "Active", "Delete"],
    ["Alice Williams", "alice@example.com", "Editor", "Active", "View"],
    ["Mike Brown", "mike@example.com", "Viewer", "Inactive", "Edit"],
  ]);

  // Create a new component with the current data
  const currentComponent = useMemo(
    () => ({
      ...TABLE_COMPONENTS,
      properties: {
        ...TABLE_COMPONENTS.properties,
        child: {
          ...TABLE_COMPONENTS.properties.child,
          properties: {
            ...TABLE_COMPONENTS.properties.child.properties,
            data,
          },
        },
      },
    }),
    [data],
  );

  const handleAddRow = () => {
    const newRow = [
      `User ${data.length + 1}`,
      `user${data.length + 1}@example.com`,
      "Viewer",
      "Active",
      "View",
    ];
    setData([...data, newRow]);
  };

  const handleDeleteRow = (index: number) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-2">Table Component Demo</h1>
        <p className="text-gray-600">
          This demo shows how the Table component can be dynamically rendered
          with data from an AI response.
        </p>
        <div className="mt-4">
          <button
            onClick={handleAddRow}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
          >
            Add Row
          </button>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        <Renderer
          processor={processor}
          surfaceId="table-surface"
          component={currentComponent as AnyComponentNode}
        />
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Mock LLM Response</h2>
        <div className="bg-gray-50 p-4 rounded-lg border">
          <h3 className="font-medium mb-2">Components Schema:</h3>
          <pre className="text-sm overflow-x-auto">
            {JSON.stringify(
              {
                components: [TABLE_COMPONENTS],
              },
              null,
              2,
            )}
          </pre>
          <h3 className="font-medium mt-4 mb-2">Data:</h3>
          <pre className="text-sm overflow-x-auto">
            {JSON.stringify(
              {
                data: {
                  users: data.map((row) => ({
                    name: row[0],
                    email: row[1],
                    role: row[2],
                    status: row[3],
                  })),
                },
              },
              null,
              2,
            )}
          </pre>
        </div>
      </div>
    </div>
  );
}
