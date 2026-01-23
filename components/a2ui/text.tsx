import { useMemo } from "react";
import markdownit from "markdown-it";
import { useDynamicComponent } from "./use-dynamic-component";
import type { TextNode } from "./types";
import type { MessageProcessor } from "./processor";

const md = markdownit({
  html: false,
  linkify: true,
  typographer: true,
});

interface TextProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: TextNode;
  weight?: string | number;
}

export function Text({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: TextProps) {
  const { resolvePrimitive } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  const text = useMemo(
    () => resolvePrimitive(component.properties.text),
    [resolvePrimitive, component.properties.text],
  );
  const usageHint = component.properties.usageHint || "body";

  const resolvedText = useMemo(() => {
    if (text == null) {
      return "(empty)";
    }

    let value = String(text);

    switch (usageHint) {
      case "h1":
        value = `# ${value}`;
        break;
      case "h2":
        value = `## ${value}`;
        break;
      case "h3":
        value = `### ${value}`;
        break;
      case "h4":
        value = `#### ${value}`;
        break;
      case "h5":
        value = `##### ${value}`;
        break;
      case "caption":
        value = `*${value}*`;
        break;
      default:
        value = String(value);
        break;
    }

    return md.render(value);
  }, [text, usageHint]);

  const className = useMemo(() => {
    switch (usageHint) {
      case "h1":
        return "text-4xl font-bold";
      case "h2":
        return "text-3xl font-bold";
      case "h3":
        return "text-2xl font-semibold";
      case "h4":
        return "text-xl font-semibold";
      case "h5":
        return "text-lg font-medium";
      case "caption":
        return "text-sm text-gray-500";
      case "monospaced":
        return "font-mono";
      default:
        return "text-base";
    }
  }, [usageHint]);

  if (usageHint.startsWith("h")) {
    const Tag = usageHint as any;
    return (
      <Tag
        dangerouslySetInnerHTML={{ __html: resolvedText }}
        className={className}
      />
    );
  }

  return (
    <p
      dangerouslySetInnerHTML={{ __html: resolvedText }}
      className={className}
    />
  );
}
