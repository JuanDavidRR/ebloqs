/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import BenefitItemSolution from "@/components/BenefitItem";
import HorizontalWrapper from "@/components/framerMotion/HorizontalWrapper";
import styles from "@/styles";
import { benefits } from "@/utils/constants/benefits";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";

const TokenEbl = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
    }
  }, [isInView])
  
  return (
    <section
      className={`${styles.paddings} flex flex-col gap-8 relative`}
      ref={ref}
    >
      <div className={`${styles.flexCenter} flex-col gap-6`}>
        <h2>Token EBL</h2>
        <p className="text-center">
          A partir del lanzamiento de la ICO con la plataforma operativa, esto generará alta rentabilidad
          al EBL que es el combustible del ecosistema ebloqs®.
        </p>
      </div>
      <HorizontalWrapper height="20rem" direction={-200}>
        <div className="flex gap-10">
          {benefits.map((ben, index) => (
            <BenefitItemSolution
              icon="/images/svg/solution.svg"
              description={ben.description}
              key={`benefit-${index}`}
              />
          ))}
      </div>
      </HorizontalWrapper>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{duration: 3, ease: "anticipate"}}
        style={{ 
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "white",
          zIndex: 20
        }}
      >
      </motion.div>
    </section>
  );
};

// interface TokenEblProps {

// }

export default TokenEbl;
