import { useMemo } from "react";
import { useDynamicComponent } from "./use-dynamic-component";
import type { AudioPlayerNode } from "./types";
import type { MessageProcessor } from "./processor";

interface AudioPlayerProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: AudioPlayerNode;
  weight?: string | number;
}

export function AudioPlayer({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: AudioPlayerProps) {
  const { resolvePrimitive } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  const url = useMemo(
    () => resolvePrimitive(component.properties.url),
    [resolvePrimitive, component.properties.url],
  );
  const description = useMemo(
    () => resolvePrimitive(component.properties.description),
    [resolvePrimitive, component.properties.description],
  );

  if (!url) {
    return null;
  }

  return (
    <div style={{ flex: weight }}>
      <audio src={url} controls className="w-full" />
      {description && (
        <p className="text-sm text-gray-500 mt-1">{description}</p>
      )}
    </div>
  );
}
