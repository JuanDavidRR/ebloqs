/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { TypingText } from "@/components/CustomTexts";
import styles from "@/styles";
import React, {  useEffect, useRef } from "react";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";

const Video = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.65, 1], [1, 1, 0]);

  const height = useTransform(
    scrollYProgress,
    [0, 0.6, 0.9, 2],
    ["50%", "100%", "100%", "50%"]
  );

  const width = useTransform(
    scrollYProgress,
    [0, 0.6, 0.9, 2],
    ["50%", "100%", "100%", "50%"]
  );

  const borderWidth = useTransform(
    scrollYProgress,
    [0, 0.25, 0.9, 1],
    ["8px", "30px", "30px", "8px"]
  );

  // const backgroundColor = useTransform(
  //   scrollYProgress,
  //   [0, 0.1],
  //   ["white", "black"]
  // )

  const y = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "-100%",]);
  const yInverse = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <motion.section
      // style={{
      //   backgroundColor
      // }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.30 }}
      className="relative "
    >
      <div
        className={`${styles.paddings} lg:pb-32 flex flex-col gap-5 text-center mx-auto relative`}
        ref={scrollRef}
      >
        <TypingText element="h3" title="Ebloqs te explica" />
        <h2>¿Qué es la tecnología <span className="gradient-text text-inherit">Blockchain</span></h2>
        <motion.section
          style={{
            opacity,
            height,
            width,
            backgroundImage: "linear-gradient(to right, var(--primary-blue) 30%, #9e5ef3 80%, var(--primary-purple) 100%)",
            borderWidth
            }}
          className={`${styles.flexCenter} w-full mx-auto mt-7 border-transparent rounded-lg`}
        >
          <video autoPlay muted loop className="w-full h-full" controls>
            <source src={"/videos/mainVideo.mp4"} type="video/mp4"/>
          </video>
        </motion.section>
      </div>
      {/* Background section */}
      <div>
        <motion.div
          style={{y}}
          className="absolute bottom-0 -left-0 bg-primary-purple w-20 h-[50%]"
        >
          <div className="flex flex-col h-full">
            <div className="border-b border-white text-white text-2xl flex flex-col justify-center items-center h-1/2">
              <p> 4.5/5 </p>
              Icon
            </div>
            <div className="border-b border-white text-white text-2xl flex flex-col justify-center items-center h-1/2">
              <p> 4.5/5 </p>
              Icon
            </div>
          </div>
        </motion.div>
        <motion.div
          style={{
            y: yInverse
          }}
          className="absolute top-0 -right-0 bg-primary-purple w-20 h-[50%]"
        >
          <div className="flex flex-col h-full">
            <div className="border-b border-white text-white text-2xl flex flex-col justify-center items-center h-1/2">
              <p> 4.5/5 </p>
              Icon
            </div>
            <div className="border-b border-white text-white text-2xl flex flex-col justify-center items-center h-1/2">
              <p> 4.5/5 </p>
              Icon
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};


export default Video;
