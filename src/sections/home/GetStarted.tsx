"use client";


import styles from "@/styles";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion, useMotionValue, useAnimation, useInView } from "framer-motion";
import backgroundImg from "public/images/fondo.png";
import { fadeIn, staggerContainer } from "@/utils/animations/motion";
import { startingFeatures } from "@/utils/constants/insights";
import { FadeText, TypingText } from "@/components/CustomTexts";

import startImg from "public/images/1.png";
import Button from "@/components/Button";

const GetStarted = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollRef, { once: false, amount: 0.8 });
  const slideControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    // offset: [-5, 20],
    offset: [0, 20],
  });
  const [scrollY, setScrollY] = useState(0);
  const y = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"], {
    clamp: true,
  });

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
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex lg:flex-row flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={`flex-1 flex justify-center flex-col gap-10`}
        >
          <section className="flex flex-col gap-0">
          <TypingText element="h4" title="| Haz parte del futuro" />

            <FadeText heading="h2" textStyles="" delay={0} direction="right">
              ¿Cómo rentalizar hasta{" "}
              <span className="gradient-text font-bold">25% E/A</span> en
              proyectos?
            </FadeText>
          </section>
          <div className="flex lg:w-3/4 flex-col justify-between gap-10">
            {startingFeatures.map((feature, index) => (
              <div
                key={feature.id}
                className={`${styles.flexCenter} flex gap-5`}
              >
                <div
                  className={`${styles.flexCenter} py-3 px-5 rounded-full bg-black-market`}
                >
                  <p className="font-bold text-[20px] text-white">
                    {index + 1}
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl">{feature.title}</h3>
                  <p>{feature.content}</p>
                </div>
              </div>
            ))}
            <Button
              content="Simula tu inversión"
              url="#invierte"
              styleText="mx-auto my-10"
            />
          </div>
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className={`flex-[0.8] ${styles.flexCenter} relative`}
        >
          <Image
            src={startImg}
            alt="get-started"
            width={600}
            height={600}
            className="object-contain z-10"
          />
          <motion.div
            className="w-full h-full px-20 absolute top-[-100%] md:top-[-50%] lg:top-[-40%]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              y: scrollY * 0.15,
              transition: "transform 0.3s ease-out",
              width: "550px",
            }}
          >
            <Image
              src={backgroundImg}
              className="top-10 object-contain "
              fill
              alt=""
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetStarted;
