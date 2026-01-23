import { useDynamicComponent } from "./use-dynamic-component";
import type { CardNode } from "./types";
import type { MessageProcessor } from "./processor";
import { Renderer } from "./renderer";
import { Card as ShadCNCard } from "@/components/ui/card";

interface CardProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: CardNode;
  weight?: string | number;
}

export function Card({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: CardProps) {
  const { theme } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  return (
    <ShadCNCard className="p-4" style={{ flex: weight }}>
      {component.properties.child && (
        <Renderer
          processor={processor}
          surfaceId={surfaceId}
          component={component.properties.child}
        />
      )}
    </ShadCNCard>
  );
}
