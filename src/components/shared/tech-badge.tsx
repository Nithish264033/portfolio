"use client";

import { cn } from "@/lib/utils";

interface TechBadgeProps {
  name: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md";
}

export function TechBadge({
  name,
  className,
  variant = "default",
  size = "sm",
}: TechBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full font-medium transition-all duration-200",
        size === "sm" && "px-3 py-1 text-xs",
        size === "md" && "px-4 py-1.5 text-sm",
        variant === "default" &&
          "bg-primary/10 text-primary hover:bg-primary/20",
        variant === "outline" &&
          "border border-primary/30 text-primary hover:border-primary/50",
        variant === "ghost" &&
          "text-muted-foreground hover:text-primary hover:bg-primary/5",
        className
      )}
    >
      {name}
    </span>
  );
}