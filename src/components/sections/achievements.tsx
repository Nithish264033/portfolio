"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { achievements, certifications } from "@/lib/achievements";
import { AchievementsTimeline } from "@/components/achievements/achievements-timeline";

export function AchievementsSection() {
  return (
    <section id="achievements" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Achievements"
          subtitle="Awards, recognitions, and certifications"
        />
        <AchievementsTimeline achievements={achievements} certifications={certifications} />
      </div>
    </section>
  );
}