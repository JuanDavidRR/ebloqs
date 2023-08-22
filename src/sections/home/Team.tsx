/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { TypingText } from "@/components/CustomTexts";
import TeamCard from "@/components/TeamCard";
import styles from "@/styles";
import { team } from "@/utils/constants/team";
import { motion, useAnimation, useInView, useScroll, useTransform } from "framer-motion";
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
    if (isInView)
      slideControls.start("showShadow");
    else 
      slideControls.start("hiddenShadown");
  }, [isInView])

  // const x = useTransform(scrollYProgress, [0, 0.2], ["-100%", "0%"], {
  //   clamp: true,
  // });
  // const xReverse = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"], {
  //   clamp: true,
  // });
  // const y = useTransform(scrollYProgress, [0, 0.2], ["100%", "0%"], {
  //   clamp: true,
  // });

  const x = useTransform(scrollYProgress, [0, 0.2], ["0%", "-100%"], {
    clamp: true,
  });
  const xReverse = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"], {
    clamp: true,
  });
  const y = useTransform(scrollYProgress, [0, 0.2], ["0%", "100%"], {
    clamp: true,
  });

  return (
    <section className={styles.paddings} ref={scrollRef}>
      <TypingText element="h3" title="| Nosotros" />
      <h2>Conoce nuestro <span className="gradient-text text-inherit">equipo</span> de trabajo</h2>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(50px,1fr))] gap-12 my-10">
        {team.map((teamMember, index) => (
          <motion.div
            style={{
              ...index === 0 && {
                x
              },
              ...index === 1 && {
                y
              },
              ...index === 2 && {
                x: xReverse
              }
            }}
            key={teamMember.id}
          >
            <TeamCard
              animate={slideControls}
              {...teamMember}
            />
          </motion.div>
        ))}
      </section>
    </section>
  );
};

export default Team;
