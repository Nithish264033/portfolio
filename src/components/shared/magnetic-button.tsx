"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  download?: boolean;
  target?: string;
  rel?: string;
}

export function MagneticButton({
  children,
  href,
  onClick,
  className,
  variant = "primary",
  size = "md",
  download,
  target,
  rel,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const baseStyles = cn(
    "relative inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
    size === "sm" && "px-5 py-2 text-sm",
    size === "md" && "px-8 py-3 text-base",
    size === "lg" && "px-10 py-4 text-lg",
    variant === "primary" &&
      "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25",
    variant === "secondary" &&
      "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-lg shadow-secondary/25",
    variant === "outline" &&
      "border border-primary/30 text-primary hover:bg-primary/10",
    variant === "ghost" &&
      "text-muted-foreground hover:text-primary hover:bg-muted",
    className
  );

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      className={baseStyles}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="inline-block"
        download={download}
        target={target}
        rel={rel}
      >
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className="inline-block">
      {content}
    </button>
  );
}