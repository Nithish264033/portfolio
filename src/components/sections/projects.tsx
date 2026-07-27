"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/section-header";
import { projects } from "@/lib/projects";
import { ProjectsGrid } from "@/components/projects/projects-grid";

export function ProjectsSection() {
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <SectionHeader
          title="Projects"
          subtitle="A collection of projects spanning AI, IoT, Full-Stack, and Software Engineering"
        />
        <ProjectsGrid projects={projects} />
      </div>
    </section>
  );
}