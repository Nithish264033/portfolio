"use client";

import { useTypewriter } from "@/hooks/use-typewriter";

const WORDS = [
  "Software Engineer",
  "AI Engineer",
  "IoT Engineer",
  "Full-Stack Developer",
  "Problem Solver",
  "Hackathon Winner",
];

export function DynamicText() {
  const { text } = useTypewriter({
    words: WORDS,
    typeSpeed: 80,
    deleteSpeed: 50,
    pauseDuration: 2000,
  });

  return (
    <span className="gradient-text">
      {text}
      <span className="animate-pulse">|</span>
    </span>
  );
}