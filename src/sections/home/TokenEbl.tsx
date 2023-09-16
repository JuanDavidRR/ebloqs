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
import { FadeText, TypingText } from "@/components/CustomTexts";
import Image from "next/image";

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
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col gap-8`}
      >
        <div className={`${styles.flexCenter} flex-col gap-6`}>
          <TypingText element="h3" title="| Haz parte del futuro" />
          <FadeText
            heading="h2"
            textStyles="flex items-center gap-5"
            delay={0}
            direction="right"
          >
            Token EBL
            <Image
              src="/images/coin.png"
              alt="token ebl coin"
              width={100}
              height={100}
            />
          </FadeText>
          <FadeText heading="p" textStyles="" delay={0} direction="right">
            A partir del lanzamiento de la ICO con la plataforma operativa, esto
            generará alta rentabilidad al EBL que es el combustible del
            ecosistema ebloqs®.
          </FadeText>
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
        <motion.div
          variants={fadeIn("right", "tween", 0.2, 1)}
          className={`flex-1 flex justify-center flex-col gap-10`}
        >
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
        </motion.div>
      </motion.div>
    </section>
  );
};

// interface TokenEblProps {

// }

export default TokenEbl;
