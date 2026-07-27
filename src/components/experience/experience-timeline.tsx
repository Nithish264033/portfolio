"use client";

import { motion } from "framer-motion";
import { Experience } from "@/types/common";
import { TechBadge } from "@/components/shared/tech-badge";

interface ExperienceTimelineProps {
  experiences: Experience[];
}

export function ExperienceTimeline({ experiences }: ExperienceTimelineProps) {
  if (experiences.length === 0) {
    return (
      <div className="mx-auto max-w-2xl text-center py-12">
        <p className="text-muted-foreground">No experience entries yet.</p>
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Timeline line */}
      <div className="absolute left-8 top-0 h-full w-px bg-gradient-to-b from-primary via-secondary to-accent opacity-30" />

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-20"
          >
            {/* Timeline dot */}
            <div className="absolute left-4 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary shadow-lg shadow-primary/25">
              <div className="h-3 w-3 rounded-full bg-primary-foreground" />
            </div>

            {/* Card */}
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <div>
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-primary">{exp.organization}</p>
                </div>
                <span className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
                  {exp.duration}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                {exp.description}
              </p>

              {/* Achievements */}
              {exp.achievements.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Key Achievements</h4>
                  <ul className="space-y-1">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}