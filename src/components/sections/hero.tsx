"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { DynamicText } from "@/components/hero/dynamic-text";
import { MagneticButton } from "@/components/shared/magnetic-button";
import { SITE_CONFIG } from "@/lib/constants";

const PARTICLE_POSITIONS = [
  { left: "10%", top: "20%", duration: 4, delay: 0 },
  { left: "25%", top: "60%", duration: 5, delay: 0.5 },
  { left: "40%", top: "15%", duration: 3.5, delay: 1 },
  { left: "55%", top: "70%", duration: 6, delay: 0.2 },
  { left: "70%", top: "30%", duration: 4.5, delay: 1.5 },
  { left: "85%", top: "80%", duration: 3, delay: 0.8 },
  { left: "15%", top: "85%", duration: 5.5, delay: 1.2 },
  { left: "90%", top: "10%", duration: 4, delay: 0.3 },
];

export function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden aurora-bg">
      {/* Grid Background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Floating Particles (decorative) */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden">
          {PARTICLE_POSITIONS.map((pos, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-primary/20"
              style={{
                left: pos.left,
                top: pos.top,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: pos.duration,
                repeat: Infinity,
                delay: pos.delay,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="container-custom relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-2 md:order-1"
          >
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mb-4 text-sm font-medium uppercase tracking-widest text-primary"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
            >
              Nithish M
            </motion.h1>

            {/* Dynamic Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mb-6 text-2xl font-semibold sm:text-3xl"
            >
              <DynamicText />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mb-8 max-w-lg text-lg text-muted-foreground leading-relaxed"
            >
              {SITE_CONFIG.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton href="/projects" variant="primary" size="md">
                View Projects
              </MagneticButton>
              <MagneticButton href={SITE_CONFIG.resumeUrl} variant="outline" size="md" download>
                Download Resume
              </MagneticButton>
              <MagneticButton href="/contact" variant="ghost" size="md">
                Contact Me
              </MagneticButton>
            </motion.div>
          </motion.div>

            {/* Right: Image / Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Glowing frame */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-[2px] opacity-75 blur-sm" />
              <div className="relative h-72 w-72 overflow-hidden rounded-full bg-muted sm:h-80 sm:w-80">
                <img
                  src="/images/profile/profile.jpeg"
                  alt="Nithish M"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-8 w-[1px] bg-gradient-to-b from-primary to-transparent" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}