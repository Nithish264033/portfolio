"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  className,
  align = "center",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-16 space-y-4",
        align === "center" && "text-center",
        className
      )}
    >
      <h2 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
          {subtitle}
        </p>
      )}
      <div
        className={cn(
          "mx-auto mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-primary via-secondary to-accent",
          align === "left" && "mx-0"
        )}
      />
    </motion.div>
  );
}