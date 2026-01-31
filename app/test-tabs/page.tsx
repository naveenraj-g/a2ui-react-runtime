"use client";

import { Renderer } from "@/a2ui/rendering/renderer";
import { createMessageProcessor } from "@/a2ui/rendering/processor";
import type { AnyComponentNode } from "@/a2ui/types";
import schema from "../../test-tabs-schema.json";

const processor = createMessageProcessor();

export default function TestTabs() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <Renderer
        processor={processor}
        surfaceId="test-tabs-surface"
        component={schema as AnyComponentNode}
      />
    </div>
  );
}
