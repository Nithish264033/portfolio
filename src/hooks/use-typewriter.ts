"use client";

import { useState, useEffect, useCallback } from "react";

interface UseTypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
}

export function useTypewriter({
  words,
  typeSpeed = 80,
  deleteSpeed = 50,
  pauseDuration = 2000,
}: UseTypewriterOptions) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const currentWord = words[wordIndex];

  const handleTyping = useCallback(() => {
    if (isPaused) return;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        setText(currentWord.slice(0, text.length + 1));
      } else {
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      if (text.length > 0) {
        setText(text.slice(0, -1));
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [text, currentWord, isDeleting, isPaused, pauseDuration, words.length]);

  useEffect(() => {
    const timeout = setTimeout(
      handleTyping,
      isDeleting ? deleteSpeed : typeSpeed
    );
    return () => clearTimeout(timeout);
  }, [handleTyping, isDeleting, deleteSpeed, typeSpeed]);

  return { text, isDeleting };
}