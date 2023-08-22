"use client"

import Button from "@/components/Button";
import { TypingText } from "@/components/CustomTexts";
import ProjectCard from "@/components/ProjectCard";
import styles from "@/styles";
import { staggerContainer } from "@/utils/animations/motion";
import { projects } from "@/utils/constants/projects";
import { motion } from "framer-motion";

import React from "react";

const Projects = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings} bg-[#323663] text-white`}
    >
      <section className="flex flex-col lg:flex-row gap-10">
        <section className="flex-1 flex flex-col gap-10 relative">
          <TypingText element="h4" title="Haz parte del futuro" />
          <h2>Descubre el futuro</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut
            voluptates cupiditate iste blanditiis obcaecati, magnam quisquam
            beatae ipsa quam praesentium. Similique maiores illo rerum quod.
            Unde corrupti totam quidem quas.
          </p>
          <section className="flex flex-col md:flex-row gap-10 mx-auto">
            {projects.map(project => (
                <ProjectCard key={project.id} {...project} />
            ))}
          </section>
          <section className="mx-auto">
          <Button url="/marketplace" content="Ver projectos" />
          </section>
        </section>
      </section>
    </motion.section>
  );
};

export default Projects;
