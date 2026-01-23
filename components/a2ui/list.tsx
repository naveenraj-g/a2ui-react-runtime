import { useDynamicComponent } from "./use-dynamic-component";
import type { ListNode } from "./types";
import type { MessageProcessor } from "./processor";
import { Renderer } from "./renderer";

interface ListProps {
  processor: MessageProcessor;
  surfaceId: string;
  component: ListNode;
  weight?: string | number;
}

export function List({
  processor,
  surfaceId,
  component,
  weight = "initial",
}: ListProps) {
  const { theme } = useDynamicComponent(
    processor,
    surfaceId,
    component,
    weight,
  );

  const direction = component.properties.direction || "vertical";

  const containerClass =
    direction === "horizontal" ? "flex flex-row" : "flex flex-col";

  return (
    <div className={`${containerClass} gap-2`} style={{ flex: weight }}>
      {component.properties.children?.map((child) => (
        <Renderer
          key={child.id}
          processor={processor}
          surfaceId={surfaceId}
          component={child}
          weight={child.weight || "initial"}
        />
      ))}
    </div>
  );
}
