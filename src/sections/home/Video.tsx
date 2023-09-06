/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FadeText, TypingText } from "@/components/CustomTexts";
import styles from "@/styles";
import React, { useEffect, useRef } from "react";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";

const Video = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.6, 0.9, 2],
    ["50%", "100%", "100%", "50%"]
  );

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

  const y = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "-100%"]);
  const yInverse = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <motion.section
      // style={{
      //   backgroundColor
      // }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      className={`${styles.paddings} relative bg-black-market text-white`}
    >
      <div
        className={`flex-col gap-5 text-center mx-auto relative`}
        ref={scrollRef}
      >
        <TypingText element="h3" title="Ebloqs te explica" />
        <FadeText heading="h2" textStyles="" delay={0} direction="right">
          ¿Qué es la tecnología Blockchain?
        </FadeText>
        <motion.section
          style={{
            opacity,
            height,
            width,
            // backgroundImage: "",
            borderWidth,
          }}
          className={`${styles.flexCenter} hidden md:flex w-full mx-auto mt-7 border-transparent rounded-lg`}
        >
          <div className=" p-2 md:p-10 bg-gradient-to-r from-primary via-purple-500 to-secondary 100%) rounded-lg w-full h-[80vh]">
            {/* <video autoPlay muted loop className="w-full h-full" controls>
              <source src={"/videos/mainVideo.mp4"} type="video/mp4"/>
            </video> */}
            <iframe
              className="w-full h-full"
              src={`https://www.youtube.com/embed/Wc5x-Xf9RbI?autoplay=1&mute=1`}
              allowFullScreen
              allow="autoplay"
            ></iframe>
          </div>
        </motion.section>
      </div>

      <div className="md:hidden mt-5 flex p-2 md:p-10 bg-gradient-to-r from-primary via-purple-500 to-secondary 100%) rounded-lg h-[30vh]">
        {/* <video autoPlay muted loop className="w-full h-full" controls>
          <source src={"/videos/mainVideo.mp4"} type="video/mp4"/>
        </video> */}
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/Wc5x-Xf9RbI?autoplay=1&mute=1`}
          allowFullScreen
          allow="autoplay"
        ></iframe>
      </div>
      {/* Background section */}
      {/* <div>
        <motion.div
          style={{y}}
          className="absolute bottom-0 -left-0 bg-primary w-20 h-[50%]"
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
          className="absolute top-0 -right-0 bg-primary w-20 h-[50%]"
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
      </div> */}
    </motion.section>
  );
};

export default Video;
