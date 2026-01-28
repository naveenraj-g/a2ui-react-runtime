"use client";

import { useState, useRef, useEffect } from "react";
import { createMessageProcessor } from "@/components/a2ui/processor";
import { Renderer } from "@/components/a2ui/renderer";
import type { AnyComponentNode } from "@/components/a2ui/types";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { MessageCircle, Send } from "lucide-react";
import { markdownLLMData } from "@/components/data";

const processor = createMessageProcessor();

const PRESET_LAYOUTS = [
  {
    name: "Flight Status",
    components: [
      {
        id: "root",
        type: "Card",
        properties: {
          child: {
            id: "main-column",
            type: "Column",
            properties: {
              children: [
                {
                  id: "header-row",
                  type: "Row",
                  properties: {
                    children: [
                      {
                        id: "flight-number",
                        type: "Text",
                        properties: {
                          text: { literalString: "OS 87" },
                          usageHint: "h3",
                        },
                      },
                      {
                        id: "date",
                        type: "Text",
                        properties: {
                          text: { literalString: "Mon, Dec 15" },
                          usageHint: "caption",
                        },
                      },
                    ],
                    distribution: "spaceBetween",
                    alignment: "center",
                  },
                },
                {
                  id: "route-row",
                  type: "Row",
                  properties: {
                    children: [
                      {
                        id: "origin",
                        type: "Text",
                        properties: {
                          text: { literalString: "Vienna" },
                          usageHint: "h2",
                        },
                      },
                      {
                        id: "arrow",
                        type: "Text",
                        properties: {
                          text: { literalString: "→" },
                          usageHint: "h2",
                        },
                      },
                      {
                        id: "destination",
                        type: "Text",
                        properties: {
                          text: { literalString: "New York" },
                          usageHint: "h2",
                        },
                      },
                    ],
                    gap: "small",
                    alignment: "center",
                  },
                },
                {
                  id: "divider",
                  type: "Divider",
                  properties: {},
                },
                {
                  id: "times-row",
                  type: "Row",
                  properties: {
                    children: [
                      {
                        id: "departure-col",
                        type: "Column",
                        properties: {
                          children: [
                            {
                              id: "departure-label",
                              type: "Text",
                              properties: {
                                text: { literalString: "Departs" },
                                usageHint: "caption",
                              },
                            },
                            {
                              id: "departure-time",
                              type: "Text",
                              properties: {
                                text: { literalString: "10:15 AM" },
                                usageHint: "h3",
                              },
                            },
                          ],
                          alignment: "start",
                          gap: "none",
                        },
                      },
                      {
                        id: "status-col",
                        type: "Column",
                        properties: {
                          children: [
                            {
                              id: "status-label",
                              type: "Text",
                              properties: {
                                text: { literalString: "Status" },
                                usageHint: "caption",
                              },
                            },
                            {
                              id: "status-value",
                              type: "Text",
                              properties: {
                                text: { literalString: "On Time" },
                                usageHint: "body",
                              },
                            },
                          ],
                          alignment: "center",
                          gap: "none",
                        },
                      },
                      {
                        id: "arrival-col",
                        type: "Column",
                        properties: {
                          children: [
                            {
                              id: "arrival-label",
                              type: "Text",
                              properties: {
                                text: { literalString: "Arrives" },
                                usageHint: "caption",
                              },
                            },
                            {
                              id: "arrival-time",
                              type: "Text",
                              properties: {
                                text: { literalString: "2:30 PM" },
                                usageHint: "h3",
                              },
                            },
                          ],
                          alignment: "end",
                          gap: "none",
                        },
                      },
                    ],
                    distribution: "spaceBetween",
                  },
                },
              ],
              gap: "small",
              alignment: "stretch",
            },
          },
        },
      },
    ],
  },
  {
    name: "Login Form",
    components: [
      {
        id: "root",
        type: "Card",
        properties: {
          child: {
            id: "main-column",
            type: "Column",
            properties: {
              children: [
                {
                  id: "header",
                  type: "Column",
                  properties: {
                    children: [
                      {
                        id: "title",
                        type: "Text",
                        properties: {
                          text: { literalString: "Welcome back" },
                          usageHint: "h2",
                        },
                      },
                      {
                        id: "subtitle",
                        type: "Text",
                        properties: {
                          text: { literalString: "Sign in to your account" },
                          usageHint: "caption",
                        },
                      },
                    ],
                    alignment: "center",
                  },
                },
                {
                  id: "email-field",
                  type: "TextField",
                  properties: {
                    label: { literalString: "Email" },
                    placeholder: { literalString: "Email address" },
                  },
                },
                {
                  id: "password-field",
                  type: "TextField",
                  properties: {
                    label: { literalString: "Password" },
                    placeholder: { literalString: "Password" },
                    textFieldType: "obscured",
                  },
                },
                {
                  id: "login-btn",
                  type: "Button",
                  properties: {
                    child: {
                      id: "login-btn-text",
                      type: "Text",
                      properties: {
                        text: { literalString: "Sign in" },
                      },
                    },
                    action: { name: "login" },
                    primary: true,
                  },
                },
              ],
              gap: "medium",
            },
          },
        },
      },
    ],
  },
  {
    name: "Movie Card",
    components: [
      {
        id: "root",
        type: "Card",
        properties: {
          child: {
            id: "main-column",
            type: "Column",
            properties: {
              children: [
                {
                  id: "poster",
                  type: "Image",
                  properties: {
                    url: {
                      literalString:
                        "https://picsum.photos/seed/movie1/300/450.jpg",
                    },
                    altText: { literalString: "Movie Poster" },
                    fit: "cover",
                  },
                },
                {
                  id: "content",
                  type: "Column",
                  properties: {
                    children: [
                      {
                        id: "title",
                        type: "Text",
                        properties: {
                          text: { literalString: "The Matrix" },
                          usageHint: "h3",
                        },
                      },
                      {
                        id: "year",
                        type: "Text",
                        properties: {
                          text: { literalString: "1999" },
                          usageHint: "caption",
                        },
                      },
                      {
                        id: "rating",
                        type: "Text",
                        properties: {
                          text: { literalString: "⭐ 8.7" },
                          usageHint: "body",
                        },
                      },
                    ],
                    gap: "small",
                  },
                },
              ],
              gap: "small",
            },
          },
        },
      },
    ],
  },
  {
    name: "Music Player",
    components: [
      {
        id: "root",
        type: "Card",
        properties: {
          child: {
            id: "main-column",
            type: "Column",
            properties: {
              children: [
                {
                  id: "album-art",
                  type: "Image",
                  properties: {
                    url: {
                      literalString:
                        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop",
                    },
                    altText: { literalString: "Album Art" },
                    fit: "cover",
                  },
                },
                {
                  id: "track-info",
                  type: "Column",
                  properties: {
                    children: [
                      {
                        id: "title",
                        type: "Text",
                        properties: {
                          text: { literalString: "Blinding Lights" },
                          usageHint: "h3",
                        },
                      },
                      {
                        id: "artist",
                        type: "Text",
                        properties: {
                          text: { literalString: "The Weeknd" },
                          usage: "caption",
                        },
                      },
                    ],
                    gap: "small",
                  },
                },
              ],
              gap: "small",
            },
          },
        },
      },
    ],
  },
  {
    name: "Purchase Complete",
    components: [
      {
        id: "root",
        type: "Card",
        properties: {
          child: {
            id: "main-column",
            type: "Column",
            properties: {
              gap: "medium",
              alignment: "center",
              children: [
                {
                  id: "success-icon",
                  type: "Icon",
                  properties: {
                    name: { literalString: "circle-check-big" },
                    size: "large",
                  },
                },
                {
                  id: "title",
                  type: "Text",
                  properties: {
                    text: { literalString: "Purchase Complete" },
                    usageHint: "h2",
                  },
                },
                {
                  id: "product-row",
                  type: "Row",
                  properties: {
                    gap: "medium",
                    alignment: "center",
                    children: [
                      {
                        id: "product-image",
                        type: "Image",
                        properties: {
                          url: {
                            literalString:
                              "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&h=100&fit=crop",
                          },
                          altText: { literalString: "Wireless Headphones Pro" },
                          fit: "cover",
                        },
                      },
                      {
                        id: "product-info",
                        type: "Column",
                        properties: {
                          gap: "small",
                          children: [
                            {
                              id: "product-name",
                              type: "Text",
                              properties: {
                                text: {
                                  literalString: "Wireless Headphones Pro",
                                },
                                usageHint: "h4",
                              },
                            },
                            {
                              id: "product-price",
                              type: "Text",
                              properties: {
                                text: { literalString: "$199.99" },
                                usageHint: "body",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  id: "divider",
                  type: "Divider",
                  properties: {},
                },
                {
                  id: "details-col",
                  type: "Column",
                  properties: {
                    gap: "small",
                    children: [
                      {
                        id: "delivery-row",
                        type: "Row",
                        properties: {
                          gap: "small",
                          alignment: "center",
                          children: [
                            {
                              id: "delivery-icon",
                              type: "Icon",
                              properties: {
                                name: { literalString: "van" },
                              },
                            },
                            {
                              id: "delivery-text",
                              type: "Text",
                              properties: {
                                text: {
                                  literalString: "Arrives Dec 18 - Dec 20",
                                },
                                usageHint: "body",
                              },
                            },
                          ],
                        },
                      },
                      {
                        id: "seller-row",
                        type: "Row",
                        properties: {
                          gap: "small",
                          children: [
                            {
                              id: "seller-label",
                              type: "Text",
                              properties: {
                                text: { literalString: "Sold by:" },
                                usageHint: "caption",
                              },
                            },
                            {
                              id: "seller-name",
                              type: "Text",
                              properties: {
                                text: { literalString: "TechStore Official" },
                                usageHint: "body",
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  id: "view-btn",
                  type: "Button",
                  properties: {
                    action: "view_details",
                    child: {
                      id: "view-btn-text",
                      type: "Text",
                      properties: {
                        text: { literalString: "View Order Details" },
                      },
                    },
                  },
                },
              ],
            },
          },
        },
      },
    ],
  },
  {
    name: "Sample MD",
    components: [
      {
        id: "root",
        type: "Row",
        properties: {
          children: [
            {
              id: "md",
              type: "Text",
              properties: {
                text: {
                  literalString: markdownLLMData,
                },
              },
            },
          ],
        },
      },
    ],
  },
];

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  layout?: any; // Use any to avoid type errors
};

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      role: "assistant",
      content:
        "Hello! I can help you create dynamic UI layouts. Try selecting one of the preset layouts below:",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const generateId = () => crypto.randomUUID();

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: generateId(),
      role: "user",
      content: input,
    };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const randomLayout =
        PRESET_LAYOUTS[Math.floor(Math.random() * PRESET_LAYOUTS.length)];
      const aiMessage: Message = {
        id: generateId(),
        role: "assistant",
        content: `Here's a dynamic ${randomLayout.name} layout:`,
        layout: randomLayout.components.find((c) => c.id === "root"),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setLoading(false);
    }, 1500);
  };

  const handlePresetClick = (layout: (typeof PRESET_LAYOUTS)[0]) => {
    const newMessage: Message = {
      id: generateId(),
      role: "user",
      content: `Show me a ${layout.name}`,
    };
    const aiMessage: Message = {
      id: generateId(),
      role: "assistant",
      content: `Here's a dynamic ${layout.name} layout:`,
      layout: layout.components.find((c) => c.id === "root"),
    };
    setMessages((prev) => [...prev, newMessage, aiMessage]);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Header */}
      <div className="bg-white border-b p-4 shadow-sm">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <MessageCircle className="h-6 w-6" />
          A2UI Chat
        </h1>
        <p className="text-gray-500 text-sm">
          Create dynamic UI layouts with AI
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${message.role === "user" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
            >
              {message.role === "user" ? "U" : "AI"}
            </div>
            <div
              className={`max-w-[75%] ${message.role === "user" ? "text-right" : "text-left"}`}
            >
              <p
                className={`mb-2 ${message.role === "user" ? "text-blue-600" : "text-gray-700"}`}
              >
                {message.content}
              </p>
              {message.layout && (
                <div className="my-2">
                  <Renderer
                    processor={processor}
                    surfaceId={`chat-surface-${message.id}`}
                    component={message.layout as AnyComponentNode}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex gap-3 justify-start">
            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
              AI
            </div>
            <div className="flex gap-2">
              <Skeleton className="h-2 w-24 bg-gray-300 rounded" />
              <Skeleton className="h-2 w-32 bg-gray-300 rounded" />
              <Skeleton className="h-2 w-16 bg-gray-300 rounded" />
            </div>
          </div>
        )}
        <div ref={scrollRef} />
      </div>

      {/* Input */}
      <div className="bg-white border-t p-4">
        <div className="flex gap-2 max-w-4xl mx-auto">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask me to create a UI layout..."
            className="flex-1"
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button
            onClick={handleSendMessage}
            disabled={loading || !input.trim()}
          >
            {loading ? "Generating..." : <Send className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Preset Layouts */}
      <div className="bg-white border-t p-4 overflow-x-auto">
        <p className="text-sm font-medium mb-2 text-gray-600">Quick Layouts:</p>
        <div className="flex gap-2">
          {PRESET_LAYOUTS.map((layout, index) => (
            <Button
              key={index}
              variant="secondary"
              size="sm"
              onClick={() => handlePresetClick(layout)}
            >
              {layout.name}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
