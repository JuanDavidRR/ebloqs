"use client";
import React from "react";
import heroImg from "public/images/8.png";
import { motion } from "framer-motion";
import styles from "@/styles/index";
import { fadeIn, staggerContainer } from "@/utils/animations/motion";
import { FadeText, TypingText } from "@/components/CustomTexts";
import DownloadBtn from "@/components/DownloadBtn";

import Image from "next/image";

const Hero = () => {
  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings}`}
    >
      <section className="flex flex-col justify-center lg:flex-row gap-10 md:h-[90vh]">
        <section className="flex-1 flex flex-col justify-center gap-10 relative">
          <TypingText element="h4" title="Haz parte del futuro" />
          <motion.div
            className="flex flex-col gap-3"
            variants={fadeIn("right", "tween", 1.5, 1)}
          >
            <h2 className="text-[50px]"> La nueva forma de invertir cambió.</h2>
            <h2 className="gradient-text text-[50px]">
              Súmate a la revolución digital ahora
            </h2>
          </motion.div>
          <motion.p className="text-xl" variants={fadeIn("right", "tween", 1.5, 1)}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In mollitia tempora magni expedita dolorum 
          </motion.p>
          <motion.section
            variants={fadeIn("up", "tween", 2.5, 1)}
            className="flex flex-col lg:flex-row gap-10 mt-7"
          >
            <DownloadBtn SO="android" outline={false} />
            <DownloadBtn SO="apple" outline={false}/>
          </motion.section>
        </section>
        <motion.section
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="flex-1 h-full justify-center flex flex-col gap-10"
        >
          <Image
            src={heroImg}
            className="relative top-10"
            width={1500}
            height={1500}
            alt=""
          />
          <h2 className="text-center">Imagen de prueba :c</h2>
        </motion.section>
      </section>
    </motion.section>
  );
};

export default Hero;
