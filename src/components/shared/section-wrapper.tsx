"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({
  children,
  className,
  id,
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollReveal<HTMLElement>();

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0 }}
      animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.6 }}
      className={cn("section-padding noise-bg", className)}
    >
      <div className="container-custom">{children}</div>
    </motion.section>
  );
}