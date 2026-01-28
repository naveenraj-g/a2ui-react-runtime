"use client";

import { useState } from "react";
import { createMessageProcessor } from "./processor";
import { Renderer } from "./renderer";
import type { AnyComponentNode } from "./types";
import { Button } from "@/components/ui/button";

const processor = createMessageProcessor();

const CHAT_COMPONENTS: AnyComponentNode[] = [
  {
    id: "root",
    type: "Column",
    properties: {
      children: [
        {
          id: "header",
          type: "Row",
          properties: {
            children: [
              {
                id: "title",
                type: "Text",
                properties: {
                  text: { literalString: "A2UI Chat Demo" },
                  usageHint: "h2",
                },
              },
            ],
            alignment: "center",
            distribution: "center",
          },
        },
        {
          id: "divider1",
          type: "Divider",
          properties: {},
        },
        {
          id: "chat-list",
          type: "List",
          properties: {
            children: [
              {
                id: "message1",
                type: "Card",
                properties: {
                  child: {
                    id: "message1-content",
                    type: "Row",
                    properties: {
                      children: [
                        {
                          id: "avatar1",
                          type: "Image",
                          properties: {
                            url: {
                              literalString:
                                "https://api.dicebear.com/7.x/avataaars/svg?seed=User",
                            },
                            usageHint: "avatar",
                          },
                        },
                        {
                          id: "message1-text",
                          type: "Text",
                          properties: {
                            text: {
                              literalString:
                                "Hello! Welcome to the A2UI demo. How can I help you?",
                            },
                          },
                        },
                      ],
                      gap: "small",
                      alignment: "center",
                    },
                  },
                },
              },
              {
                id: "message2",
                type: "Card",
                properties: {
                  child: {
                    id: "message2-content",
                    type: "Row",
                    properties: {
                      children: [
                        {
                          id: "avatar2",
                          type: "Image",
                          properties: {
                            url: {
                              literalString:
                                "https://api.dicebear.com/7.x/avataaars/svg?seed=AI",
                            },
                            usageHint: "avatar",
                          },
                        },
                        {
                          id: "message2-text",
                          type: "Text",
                          properties: {
                            text: {
                              literalString:
                                "I can help you with various tasks. What would you like to do?",
                            },
                          },
                        },
                      ],
                      gap: "small",
                      alignment: "center",
                    },
                  },
                },
              },
            ],
          },
        },
        {
          id: "divider2",
          type: "Divider",
          properties: {},
        },
        {
          id: "input-area",
          type: "Row",
          properties: {
            children: [
              {
                id: "text-input",
                type: "TextField",
                properties: {
                  label: { literalString: "Type your message" },
                  placeholder: { literalString: "What do you need?" },
                },
              },
              {
                id: "send-button",
                type: "Button",
                properties: {
                  child: {
                    id: "send-button-text",
                    type: "Text",
                    properties: {
                      text: { literalString: "Send" },
                    },
                  },
                  action: { name: "send_message" },
                },
              },
            ],
            gap: "small",
            alignment: "center",
          },
        },
      ],
      gap: "medium",
    },
  },
];

const STREAMS_DEMO: AnyComponentNode[] = [
  {
    id: "root",
    type: "Column",
    properties: {
      children: [
        {
          id: "header",
          type: "Text",
          properties: {
            text: { literalString: "Real-time Streams UI" },
            usageHint: "h3",
          },
        },
        {
          id: "info-card",
          type: "Card",
          properties: {
            child: {
              id: "info-content",
              type: "Column",
              properties: {
                children: [
                  {
                    id: "temperature",
                    type: "Row",
                    properties: {
                      children: [
                        {
                          id: "temp-label",
                          type: "Text",
                          properties: {
                            text: { literalString: "Temperature" },
                            usageHint: "h4",
                          },
                        },
                        {
                          id: "temp-value",
                          type: "Text",
                          properties: {
                            text: { literalString: "24°C" },
                          },
                        },
                      ],
                      distribution: "spaceBetween",
                      alignment: "center",
                    },
                  },
                  {
                    id: "humidity",
                    type: "Row",
                    properties: {
                      children: [
                        {
                          id: "humidity-label",
                          type: "Text",
                          properties: {
                            text: { literalString: "Humidity" },
                            usageHint: "h4",
                          },
                        },
                        {
                          id: "humidity-value",
                          type: "Text",
                          properties: {
                            text: { literalString: "65%" },
                          },
                        },
                      ],
                      distribution: "spaceBetween",
                      alignment: "center",
                    },
                  },
                  {
                    id: "slider",
                    type: "Slider",
                    properties: {
                      label: { literalString: "Fan Speed" },
                      value: { literalNumber: 75 },
                      min: { literalNumber: 0 },
                      max: { literalNumber: 100 },
                    },
                  },
                ],
                gap: "small",
              },
            },
          },
        },
      ],
      gap: "medium",
    },
  },
];

export function A2UIDemo() {
  const [currentDemo, setCurrentDemo] = useState<"chat" | "streams">("chat");

  const currentComponents =
    currentDemo === "chat" ? CHAT_COMPONENTS : STREAMS_DEMO;
  const rootComponent = currentComponents.find((c) => c.id === "root");

  if (!rootComponent) {
    return <div>No root component found</div>;
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-4xl font-bold mb-4">A2UI Next.js Demo</h1>
        <p className="text-gray-600 mb-4">
          This is a demo of the A2UI library implemented in Next.js using ShadCN
          components.
        </p>
        <div className="flex gap-4">
          <Button
            variant={currentDemo === "chat" ? "default" : "secondary"}
            onClick={() => setCurrentDemo("chat")}
          >
            Chat Interface
          </Button>
          <Button
            variant={currentDemo === "streams" ? "default" : "secondary"}
            onClick={() => setCurrentDemo("streams")}
          >
            Streams UI
          </Button>
        </div>
      </div>

      <div className="border rounded-lg p-4">
        {rootComponent && (
          <Renderer
            processor={processor}
            surfaceId="demo-surface"
            component={rootComponent}
          />
        )}
      </div>
    </div>
  );
}
