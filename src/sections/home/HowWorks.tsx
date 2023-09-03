"use client";

import { FadeText, TypingText } from '@/components/CustomTexts';
import Image from 'next/image';
import React from 'react';
import { motion} from "framer-motion";
import { staggerContainer } from '@/utils/animations/motion';
import ImageEvolution from '@/components/ImageEvolution';

const HowWorks = () => {

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`mx-auto flex flex-col gap-8 py-20`}
    >
      <div className={`flex flex-col gap-6 text-center`}>
        <TypingText element="h3" title="Cómo funciona el dinero" />
        <FadeText heading="h2" textStyles="" delay={0} direction="right">
          El dinero: {" "}
          <span className="gradient-text font-bold">Antes vs Ahora</span>
        </FadeText>
        <FadeText heading="p" textStyles="" delay={0} direction="right">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          consectetur quisquam autem odio asperiores
        </FadeText>
      </div>
      <ImageEvolution/>
       
    </motion.section>
  )
}

export default HowWorks;
