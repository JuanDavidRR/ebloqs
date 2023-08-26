/* eslint-disable react-hooks/exhaustive-deps */
import styles from "@/styles";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const InfoItemSolution = ({  description, icon, title, classNameTitle, mode }: InfoItemSolutionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const slideControls = useAnimation();

  useEffect (() => {
    if (isInView) {
      slideControls.start("visible");
    } else {
      slideControls.start("hidden");
    }
  }, [isInView]);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        staggerChildren: 0.01,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div ref={ref}>
      <motion.div
        initial="hidden"
        animate={slideControls}
        variants={textVariants}
        className={`${styles.flexStart} ${mode === "light" ? "text-black" : "text-white"} flex-col gap-4`}
      >
        <div className={`${mode === 'light' ? "bg-primary-purple bg-opacity-5" : "bg-white border border-primary-purple"}  rounded-full p-2 `}>
          {icon}
        </div>
        <h3 
          className={`${classNameTitle}`}
        >
          {title.split("").map((letter, index) => (
            <motion.span className="font-bold" key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
        </h3>
        <p>
          {description.split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants}>
              {letter}
            </motion.span>
          ))}
          </p>
      </motion.div>
    </div>
  );
}

interface InfoItemSolutionProps {
  icon: React.ReactElement,
  title: string,
  description: string,
  classNameTitle?: string,
  mode: 'light' | 'dark'
}

export default InfoItemSolution;
