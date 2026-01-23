// Helper function to convert example format to our internal format
export function parseExampleComponents(
  example: { components: any[]; data: any },
  processor: any,
): any[] {
  const components: any[] = [];
  const idMap = new Map<string, any>();

  for (const item of example.components) {
    const node: any = {
      id: item.id,
      type: Object.keys(item.component)[0],
      properties: Object.values(item.component)[0],
    };
    idMap.set(item.id, node);
    components.push(node);
  }

  // Resolve children references
  for (const node of components) {
    if (node.type === "Row" || node.type === "Column" || node.type === "List") {
      if (node.properties.children?.explicitList) {
        node.properties.children = node.properties.children.explicitList.map(
          (childId: string) => idMap.get(childId),
        );
      }
    } else if (
      node.type === "Card" ||
      node.type === "Button" ||
      node.type === "Modal"
    ) {
      if (typeof node.properties.child === "string") {
        node.properties.child = idMap.get(node.properties.child);
      }
      if (node.type === "Modal") {
        if (typeof node.properties.entryPointChild === "string") {
          node.properties.entryPointChild = idMap.get(
            node.properties.entryPointChild,
          );
        }
        if (typeof node.properties.contentChild === "string") {
          node.properties.contentChild = idMap.get(
            node.properties.contentChild,
          );
        }
      }
    } else if (node.type === "Tabs") {
      if (node.properties.tabItems) {
        node.properties.tabItems = node.properties.tabItems.map((tab: any) => ({
          ...tab,
          child:
            typeof tab.child === "string" ? idMap.get(tab.child) : tab.child,
        }));
      }
    }
  }

  return components;
}

// Helper function to process messages
export function processMessages(
  processor: any,
  example: { components: any[]; data: any },
) {
  const messages = [
    {
      beginRendering: {
        surfaceId: "demo-surface",
        root: "root",
      },
    },
    {
      surfaceUpdate: {
        surfaceId: "demo-surface",
        components: example.components,
      },
    },
    {
      dataModelUpdate: {
        surfaceId: "demo-surface",
        contents: Object.entries(example.data).map(([key, value]) => ({
          key,
          valueString:
            typeof value === "string" ? value : JSON.stringify(value),
        })),
      },
    },
  ];

  processor.processMessages(messages);
}
