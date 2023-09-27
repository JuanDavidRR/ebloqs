"use client";

import Button from "@/components/Button";
import { FadeText, TypingText } from "@/components/CustomTexts";
import ProjectCard from "@/components/ProjectCard";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/animations/motion";
import { projects } from "@/utils/constants/projects";
import { motion } from "framer-motion";

import React from "react";

const Projects = () => {
  return (
    <motion.section
      id="proyectos"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings} bg-black-market text-white text-center relative`}
    >
      <section className="flex flex-col lg:flex-row gap-10">
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="hidden md:gradient-01 z-0"
        />
        <section className="flex-1 flex flex-col gap-10 relative">
          <TypingText element="h4" title="Descubre el futuro" />
          <FadeText heading="h2" textStyles="" delay={0} direction="right">
            Nuestros proyectos
          </FadeText>
          <FadeText heading="p" textStyles="text-2xl" delay={0} direction="right">
            Escoge tu sector e industria preferida: accede a proyectos novedosos
            impulsados por tecnología Blockchain:
          </FadeText>
          <section className="flex flex-col lg:flex-row gap-10 mx-auto">
            {projects.map((project) => (
              <ProjectCard key={project.id} {...project} />
            ))}
          </section>
          {/* <section className="mx-auto">
            <Button url="/marketplace" content="Ver proyectos" />
          </section> */}
        </section>
      </section>
    </motion.section>
  );
};

export default Projects;
