"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";
import { useMemo } from "react";
import { Loader2, LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

type IconName = keyof typeof dynamicIconImports;

// cache per icon name so we only create each wrapper once
const iconCache: Partial<Record<IconName, ComponentType<LucideProps>>> = {};

export default function DynamicIcon({
  name,
  ...props
}: { name: IconName } & LucideProps) {
  const Icon = useMemo(() => {
    if (iconCache[name]) {
      return iconCache[name];
    }

    const dynamicIcon = dynamic(dynamicIconImports[name], {
      ssr: false,
      loading: () => <Loader2 className="animate-spin text-muted-foreground" />,
    });

    iconCache[name] = dynamicIcon;
    return dynamicIcon;
  }, [name]);

  if (!Icon) {
    return null;
  }

  return <Icon {...props} />;
}
