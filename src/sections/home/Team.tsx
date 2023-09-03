/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { FadeText, TypingText } from "@/components/CustomTexts";
import TeamCard from "@/components/TeamCard";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/animations/motion";
import { team } from "@/utils/constants/team";
import {
  motion,
  useAnimation,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useEffect, useRef } from "react";

const Team = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(scrollRef, { once: false, amount: 0.8 });
  const slideControls = useAnimation();

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    // offset: [-5, 20],
    offset: [0, 20],
  });

  useEffect(() => {
    if (isInView) slideControls.start("showShadow");
    else slideControls.start("hiddenShadown");
  }, [isInView]);

  // const x = useTransform(scrollYProgress, [0, 0.2], ["-100%", "0%"], {
  //   clamp: true,
  // });
  // const xReverse = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"], {
  //   clamp: true,
  // });
  // const y = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"], {
  //   clamp: true,
  // });

  const x = useTransform(scrollYProgress, [0, 0.2], ["0%", "-50%"], {
    clamp: true,
  });
  const xReverse = useTransform(scrollYProgress, [0, 0.2], ["0%", "50%"], {
    clamp: true,
  });
  const y = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"], {
    clamp: true,
  });

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      id="equipo"
      className={`${styles.paddings} bg-slate-200 `}
      // ref={scrollRef}
    >
      <section className="flex flex-col gap-6 text-center">
        <TypingText
          element="h4"
          title="| Haz parte del futuro"
        />
      <FadeText heading="h2" textStyles="" delay={0} direction="right">
          Conoce <span className="gradient-text font-bold">nuestro equipo</span>{" "}
          de trabajo
        </FadeText>
      </section>
      <section className="hidden gap-20 my-10">
        {team.map((teamMember, index) => (
          <motion.div
            style={{
              ...(index === 0 && {
                y,
              }),
              ...(index === 1 && {
                y,
              }),
              ...(index === 2 && {
                y,
              }),
            }}
            key={teamMember.id}
          >
            <TeamCard animate={slideControls} {...teamMember} />
          </motion.div>
        ))}
      </section>
      <motion.section
        variants={fadeIn("up", "tween", 1, 0)}
        className="md:w-[90%] mx-auto flex lg:flex-row flex-col gap-5 my-10"
      >
        {team.map((teamMember) => (
          <TeamCard
            key={teamMember.id}
            animate={slideControls}
            {...teamMember}
          />
        ))}
      </motion.section>
    </motion.section>
  );
};

export default Team;
