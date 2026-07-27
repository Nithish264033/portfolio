"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Project } from "@/types/common";
import { TechBadge } from "@/components/shared/tech-badge";
import { cn } from "@/lib/utils";

interface ProjectsGridProps {
  projects: Project[];
}

const FILTERS = ["all", "ai", "iot", "software"] as const;

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filtered = activeFilter === "all"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div>
      {/* Filters */}
      <div className="mb-12 flex flex-wrap justify-center gap-2">
        {FILTERS.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={cn(
              "rounded-full px-5 py-2 text-sm font-medium transition-all",
              activeFilter === filter
                ? "bg-primary text-primary-foreground"
                : "glass text-muted-foreground hover:text-foreground"
            )}
          >
            {filter === "all" ? "All" : filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/projects/${project.slug}`} className="block h-full">
                <div className="glass rounded-2xl p-6 h-full card-hover flex flex-col">
                  {/* Category Badge */}
                  <div className="mb-4">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.subtitle}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <TechBadge key={tech.name} name={tech.name} />
                    ))}
                    {project.techStack.length > 4 && (
                      <TechBadge name={`+${project.techStack.length - 4}`} variant="outline" />
                    )}
                  </div>

                  {/* Awards */}
                  {project.awards && project.awards.length > 0 && (
                    <p className="mt-4 text-xs font-medium text-accent">
                      {project.awards[0]}
                    </p>
                  )}
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}