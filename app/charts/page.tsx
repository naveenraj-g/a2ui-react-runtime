"use client";

import { Renderer } from "@/components/a2ui/renderer";
import { createMessageProcessor } from "@/components/a2ui/processor";
import type { AnyComponentNode } from "@/components/a2ui/types";
import { chartSchema, lineChart, pieOrARC } from "@/docs/sample-ai-vegalite";
import { useMemo } from "react";

function ChartsPage() {
  // Create processor inside component to ensure it's client-side only
  const processor = useMemo(() => createMessageProcessor(), []);
  // Create chart examples
  const barChartComponents: AnyComponentNode[] = [
    {
      id: "root",
      type: "Card",
      properties: {
        child: {
          id: "content",
          type: "Column",
          properties: {
            children: [
              {
                id: "title",
                type: "Text",
                properties: {
                  text: { literalString: "Sales by Product Category" },
                  usageHint: "h2",
                },
              },
              {
                id: "chart",
                type: "Chart",
                properties: {
                  spec: chartSchema,
                  values: chartSchema.data.values,
                  width: "100%",
                  height: 300,
                },
              },
            ],
            gap: "medium",
          },
        },
      },
    },
  ];

  const lineChartComponents: AnyComponentNode[] = [
    {
      id: "root",
      type: "Card",
      properties: {
        child: {
          id: "content",
          type: "Column",
          properties: {
            children: [
              {
                id: "title",
                type: "Text",
                properties: {
                  text: { literalString: "Monthly Revenue Trend" },
                  usageHint: "h2",
                },
              },
              {
                id: "chart",
                type: "Chart",
                properties: {
                  spec: lineChart,
                  values: lineChart.data.values,
                  width: "100%",
                  height: 300,
                },
              },
            ],
            gap: "medium",
          },
        },
      },
    },
  ];

  const pieChartComponents: AnyComponentNode[] = [
    {
      id: "root",
      type: "Card",
      properties: {
        child: {
          id: "content",
          type: "Column",
          properties: {
            children: [
              {
                id: "title",
                type: "Text",
                properties: {
                  text: { literalString: "Market Share Distribution" },
                  usageHint: "h2",
                },
              },
              {
                id: "chart",
                type: "Chart",
                properties: {
                  spec: pieOrARC,
                  values: pieOrARC.data.values,
                  width: "100%",
                  height: 300,
                },
              },
            ],
            gap: "medium",
          },
        },
      },
    },
  ];

  const barChartRoot = barChartComponents.find((c) => c.id === "root");
  const lineChartRoot = lineChartComponents.find((c) => c.id === "root");
  const pieChartRoot = pieChartComponents.find((c) => c.id === "root");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          A2UI Chart Examples
        </h1>

        <div className="grid grid-cols-1 gap-8">
          {/* Bar Chart */}
          <section>
            <Renderer
              processor={processor}
              surfaceId="bar-chart"
              component={barChartRoot!}
            />
          </section>

          {/* Line Chart */}
          <section>
            <Renderer
              processor={processor}
              surfaceId="line-chart"
              component={lineChartRoot!}
            />
          </section>

          {/* Pie Chart */}
          <section>
            <Renderer
              processor={processor}
              surfaceId="pie-chart"
              component={pieChartRoot!}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default ChartsPage;
