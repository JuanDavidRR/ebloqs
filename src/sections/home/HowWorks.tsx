"use client";

import { FadeText, TypingText } from "@/components/CustomTexts";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/animations/motion";
import ImageEvolution from "@/components/ImageEvolution";
import styles from "@/styles";

const HowWorks = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings} mx-auto flex flex-col gap-8 py-20`}
    >
      <div className={`flex flex-col gap-6 text-center`}>
        <TypingText element="h3" title="Cómo funciona el dinero" />
        <FadeText heading="h2" textStyles="" delay={0} direction="right">
          El dinero:{" "}
          <span className="gradient-text font-bold">Antes vs Ahora</span>
        </FadeText>
        <FadeText heading="p" textStyles="" delay={0} direction="right">
          Ebloqs facilita el encuentro y la transaccionalidad entre los
          propietarios de activos, proyectos o startups con la gran masa de
          pequeños capitales que está disponible en el mundo entero y que
          necesitan oportunidades de inversiones rentables y seguras.
        </FadeText>
      </div>
      <ImageEvolution />
    </motion.section>
  );
};

export default HowWorks;
