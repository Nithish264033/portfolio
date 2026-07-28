"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { skills } from "@/lib/skills";
import { TechBadge } from "@/components/shared/tech-badge";

export function SkillsSection() {
  // Group skills by category
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const categories = Object.keys(skillsByCategory);

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Skills & Technologies"
          subtitle="A comprehensive overview of my technical expertise and proficiencies"
        />

        <div className="grid gap-8 md:grid-cols-2">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass rounded-2xl p-6 md:p-8"
            >
              <h3 className="text-xl font-bold mb-6 gradient-text">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillsByCategory[category].map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <TechBadge
                      name={skill.name}
                      variant={skill.proficiency === "Advanced" ? "default" : skill.proficiency === "Intermediate" ? "outline" : "ghost"}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4"
        >
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold gradient-text">
              {skills.filter(s => s.proficiency === "Advanced").length}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Advanced Skills</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold gradient-text">
              {skills.filter(s => s.proficiency === "Intermediate").length}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Intermediate Skills</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold gradient-text">
              {skills.filter(s => s.proficiency === "Beginner").length}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Beginner Skills</p>
          </div>
          <div className="glass rounded-2xl p-6 text-center">
            <p className="text-3xl font-bold gradient-text">
              {categories.length}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">Categories</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}