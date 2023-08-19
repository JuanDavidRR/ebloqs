"use client";

import { motion } from "framer-motion";

import styles from "@/styles";
import Image from "next/image";
import { fadeIn, staggerContainer } from "@/utils/animations/motion";
import { startingFeatures } from "@/utils/constants/insights";
import { FadeText, TypingText } from "@/components/CustomTexts";

import startImg from "public/images/1.png";

const GetStarted = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
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
          <TypingText
            element="h2"
            title="Haz parte del futuro"
            textStyles="text-xl"
          />
          <FadeText direction="right">¿Cómo rentalizar hasta <span className="gradient-text text-inherit">25% E/A</span> en proyectos?</FadeText>
        </section>
        <div className="flex md:w-3/4 flex-col justify-between gap-10">
          {startingFeatures.map((feature, index) => (
            <div
              key={feature.id}
              className={`${styles.flexCenter} flex gap-5`}
            >
              <div
                className={`${styles.flexCenter} py-3 px-5 rounded-full bg-[#323F5D]`}
              >
                <p className="font-bold text-[20px] text-white">{index}</p>
              </div>
              <div>
                <h3>{feature.title}</h3>
                <p>{feature.content}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <Image
          src={startImg}
          alt="get-started"
          width={600}
          height={600}
          className="object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
