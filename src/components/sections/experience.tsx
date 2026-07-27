"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { experiences } from "@/lib/experience";
import { ExperienceTimeline } from "@/components/experience/experience-timeline";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Experience"
          subtitle="My professional journey and growth"
        />
        <ExperienceTimeline experiences={experiences} />
      </div>
    </section>
  );
}