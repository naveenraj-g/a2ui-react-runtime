"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { createMessageProcessor } from "@/a2ui/rendering/processor";
import { Renderer } from "@/a2ui/rendering/renderer";
import type { AnyComponentNode } from "@/a2ui/types";
import { DefaultChatTransport } from "ai";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const processor = createMessageProcessor();

export default function Chat() {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, status, sendMessage, error, stop } = useChat({
    transport: new DefaultChatTransport({
      api: "/api/a2ui",
    }),
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    sendMessage({ text: input });
    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const parseUI = (text: string): AnyComponentNode | null => {
    try {
      return JSON.parse(text) as AnyComponentNode;
    } catch {
      return null;
    }
  };

  return (
    <div className="h-full flex flex-col">
      {/* Messages */}
      <div className="flex-1 overflow-y-auto space-y-4 p-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.role === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-lg ${
                msg.role === "user" && "bg-blue-500 text-white rounded-br-none"
              }`}
            >
              {msg.parts.map((part, index) => {
                if (part.type !== "text") return null;

                if (msg.role === "user") {
                  return (
                    <p
                      key={`${msg.id}-${index}`}
                      className="whitespace-pre-wrap"
                    >
                      {part.text}
                    </p>
                  );
                }

                const ui = parseUI(part.text);
                console.log({ ui });

                return (
                  <div key={`${msg.id}-${index}`} className="my-2">
                    {ui ? (
                      <Renderer
                        processor={processor}
                        surfaceId={`chat-surface-${msg.id}-${index}`}
                        component={ui}
                      />
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Streaming indicator */}
        {status === "streaming" && (
          <div className="flex justify-start">
            <div className="bg-white border p-2 rounded-lg rounded-bl-none">
              <span className="text-sm text-gray-500 animate-pulse">
                Generating UI…
              </span>
            </div>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
            <p className="text-sm text-red-600">{error.message}</p>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <form onSubmit={handleSubmit} className="flex gap-2 max-w-4xl mx-auto">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask Anything"
            disabled={status === "streaming"}
          />
          {status === "streaming" ? (
            <Button type="button" onClick={stop}>
              Stop
            </Button>
          ) : (
            <Button type="submit" disabled={!input.trim()}>
              Generate
            </Button>
          )}
        </form>
      </div>
    </div>
  );
}
