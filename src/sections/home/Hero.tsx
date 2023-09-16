"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/index";
import { TypingText } from "@/components/CustomTexts";
import DownloadBtn from "@/components/DownloadBtn";

import Image from "next/image";
import { fadeIn, staggerContainer } from "@/utils/animations/motion";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={styles.paddings}
    >
      <section
        className={`flex flex-col justify-center items-center lg:flex-row gap-10 relative`}
      >
        <section className="flex-1 flex flex-col justify-center gap-5 relative">
          <TypingText element="h4" title="| Forma parte del futuro" />
          <motion.div
            className="flex flex-col gap-3 z-0"
            variants={fadeIn("right", "tween", 1.5, 1)}
          >
            {/* <h1>Ebloqs.</h1> */}
            <h2> Invierte rápido, fácil y seguro.</h2>
            <h2 className="gradient-text">
              Estamos aquí para cambiar el mundo paso a paso.
            </h2>
          </motion.div>
          <motion.p
            className="text-xl"
            variants={fadeIn("right", "tween", 1.5, 1)}
          >
            Ebloqs brinda acceso a las personas con pequeños capitales a
            proyectos que antes eran restrictivos e inalcanzables por requerir
            grandes inversiones. INVERSIÓN SIN FRICCIÓN Y AL ALCANCE DE TODOS
          </motion.p>
          <motion.section
            variants={fadeIn("up", "tween", 2.5, 1)}
            className="flex flex-col justify-center lg:justify-start md:flex-row gap-10 mt-7"
          >
            <DownloadBtn
              SO="android"
              outline={false}
              className="levitating-object"
            />
            <DownloadBtn
              SO="apple"
              outline={false}
              className="levitating-object"
            />
          </motion.section>
        </section>
        <motion.section
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="flex-[0.8] h-full w-full justify-center items-center flex flex-col gap-10 relative"
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="hero-gradient z-0"
          />
          <Image
            src={"/images/mockup/1.png"}
            className=" z-10"
            height={450}
            width={450}
            alt=""
          />

          <motion.div
            className="w-full h-full px-20 absolute"
            style={{
              rotate: scrollY * 0.3,
              transition: "transform 0.3s ease-out",
            }}
          >
            <Image
              src={"/images/blockchain3d.png"}
              className="top-10 object-contain z-1"
              fill
              alt=""
            />
          </motion.div>
        </motion.section>
      </section>
    </motion.section>
  );
};

export default Hero;
