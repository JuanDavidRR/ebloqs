"use client"

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Example = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0.1, 2], ["0%", "300%"]);
  const yInverse = useTransform(scrollYProgress, [0, 1], ["1%", "-100%"]);
  const yDown = useTransform(scrollYProgress, [0, 1], ["1%", "-50%"]);

  return (
    <div className="bg-primary w-full overflow-hidden relative h-[100vh]"
      ref={scrollRef}>
      <motion.div
        style={{
          y
        }}
        className="right-0 top-0 absolute"
      >
        <div className="w-60 h-[25rem] bg-black flex justify-center items-center text-white" >
          IMAGEN
        </div>
      </motion.div>
      <motion.div
        style={{
          y: yInverse
        }}
        className="left-0 top-[8rem] absolute "
      >
        <div className="w-60 h-[25rem] bg-black flex justify-center items-center text-white">
          IMAGEN
        </div>
      </motion.div>
      <motion.div
        style={{
          y: yDown
        }}
        className="right-[25%] -bottom-24 absolute"
      >
        <div className="w-60 h-80 bg-black flex justify-center items-center text-white">
          IMAGEN
        </div>
      </motion.div>
    </div>
  );
};

export default Example;
