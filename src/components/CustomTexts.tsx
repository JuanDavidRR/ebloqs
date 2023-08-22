"use client";

import { fadeIn, textContainer, textVariant2 } from "@/utils/animations/motion";
import { motion } from "framer-motion";

export const TypingText = ({ element, title, textStyles }: TypingTextProps) => {
  const MotionElement = motion[element || "p"];
  return (
    <MotionElement
      variants={textContainer}
      initial="hidden"
      whileInView="show"
      className={`${textStyles}`}
    >
      {Array.from(title, (letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </MotionElement>
  );
};

interface TypingTextProps {
  element: string;
  title: string;
  textStyles?: string;
}

export const FadeText = ({ heading, direction, textStyles, delay, children }) => {
  const MotionElement = motion[heading || "h2"];
  return (
    <MotionElement
      variants={fadeIn(direction, "tween", delay ? delay : 0.5, 1)}
      initial="hidden"
      whileInView="show"
      className={`mt-[8px] z-10 ${textStyles}`}
    >
      {children}
    </MotionElement>
  );
};
