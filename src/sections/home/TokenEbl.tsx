/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import BenefitItemSolution from "@/components/BenefitItem";
import HorizontalWrapper from "@/components/framerMotion/HorizontalWrapper";
import styles from "@/styles";
import { useAnimation, useInView, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { benlist } from "@/utils/constants/benlist";
import { social } from "@/utils/constants/social";
import DownloadBtn from "@/components/DownloadBtn";
import { fadeIn } from "@/utils/animations/motion";
import { TypingText } from "@/components/CustomTexts";

const TokenEbl = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <section
    id="token-ebl"
      className={`${styles.paddings} flex flex-col gap-8 relative`}
      ref={ref}
    >
      <div className={`${styles.flexCenter} flex-col gap-6`}>
        <TypingText element="h4" title="| Haz parte del futuro" />

        <h2>Token EBL</h2>
        <p className="text-center">
          A partir del lanzamiento de la ICO con la plataforma operativa, esto
          generará alta rentabilidad al EBL que es el combustible del ecosistema
          ebloqs®.
        </p>
      </div>
      <section className="hidden">
        <section>
          <HorizontalWrapper height="20rem" direction={-100}>
            <div className="flex flex-col md:flex-row gap-10">
              {benlist.map((ben, index) => (
                <BenefitItemSolution
                  title={ben.title}
                  icon={ben.icon}
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
            transition={{ duration: 3, ease: "anticipate" }}
            style={{
              position: "absolute",
              top: 4,
              bottom: 4,
              left: 0,
              right: 0,
              background: "white",
              zIndex: 20,
            }}
          ></motion.div>
          <motion.section
            variants={fadeIn("up", "tween", 2.5, 1)}
            className="flex flex-col justify-center mt-28 lg:flex-row gap-10"
          >
            <DownloadBtn
              SO="android"
              outline={false}
              className="levitating-object"
            />
            <DownloadBtn
              SO="apple"
              outline={false}
              className="levitating-object"
            />
          </motion.section>
        </section>
      </section>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-10 md:gap-5 mt-10">
        {benlist.map((ben, index) => (
          <BenefitItemSolution
            title={ben.title}
            icon={ben.icon}
            description={ben.description}
            key={`benefit-${index}`}
          />
        ))}
      </div>
    </section>
  );
};

// interface TokenEblProps {

// }

export default TokenEbl;
