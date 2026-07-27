"use client";

import { motion } from "framer-motion";
import { Achievement, Certification } from "@/types/common";

interface AchievementsTimelineProps {
  achievements: Achievement[];
  certifications: Certification[];
}

export function AchievementsTimeline({ achievements, certifications }: AchievementsTimelineProps) {
  return (
    <div className="space-y-16">
      <div>
        <h3 className="mb-8 text-2xl font-bold">Awards & Achievements</h3>
        <div className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500">
                  <span className="text-lg">🏆</span>
                </div>
                <div>
                  <h4 className="font-bold">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.issuer}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
              {achievement.prize && (
                <p className="text-sm font-medium text-accent">{achievement.prize}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-8 text-2xl font-bold">Certifications</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-500">
                  <span className="text-lg">📜</span>
                </div>
                <div>
                  <h4 className="font-bold">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">{cert.date}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}