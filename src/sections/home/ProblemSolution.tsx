"use client";
import { TypingText } from "@/components/CustomTexts";
import styles from "@/styles";
import backgroundImg from "public/images/fondo.png";
import personOne from "public/images/people/1.png";
import personTwo from "public/images/people/2.png";

import { useScroll, useTransform, motion } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { AiOutlineAlert, AiOutlineBulb } from "react-icons/ai";
import ecoImg from "public/images/mockup/3.png";
import { fadeIn, staggerContainer } from "@/utils/animations/motion";
import blockchain from "public/images/fondo.png";
import phone from "public/images/mockup/5.png";

const ProblemSolution = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: [0, 20],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "50%"], {
    clamp: true,
  });

  const scale = useTransform(scrollYProgress, [0, 1.2], [1, 1.3], {
    clamp: true,
  });

  const y = useTransform(scrollYProgress, [0, 3], ["1%", "100%"], {
    clamp: true,
  });

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings} lg:pl-40 lg:pr-10 flex gap-5 md:gap-28 flex-col lg:flex-row lg:py-20`}
      ref={scrollRef}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.5, 1)}
        className="flex lg:w-1/2 flex-col gap-7"
      >
        <TypingText element="h4" title="| ¿Qué está pasando?" />
        <h2>Problema & solución</h2>
        <div className="flex flex-col lg:flex-row gap-10">
          <section className="flex-1">
            <AiOutlineAlert className="text-primary-purple text-5xl" />
            <ul className="mt-5 flex flex-col gap-7">
              <li>
                <p>
                  La gran mayoría de las inversiones fomentan la exclusividad
                  para los grandes inversionistas.
                </p>
              </li>
              <li>
                <p>
                  Las fuentes de financiamiento cada vez son más limitadas y
                  costosas
                </p>
              </li>
              <li>
                <p>
                  La falta de recursos para emprender frustra muchas veces el
                  inicio y desarrollo de un nuevo proyecto.
                </p>
              </li>
            </ul>
          </section>
          <section className="flex-1">
            <AiOutlineBulb className="text-primary-purple text-5xl" />
            <ul className="mt-5 flex flex-col gap-7">
              <li>
                <p>
                  Creando un ecosistema de bienes y servicios que permita a las
                  empresas recaudar capital a través de la tokenización y a los
                  inversionistas multiplicar sus ganancias.
                </p>
              </li>
              <li>
                <p>
                  Las fuentes de financiamiento cada vez son más limitadas y
                  costosas
                </p>
              </li>
            </ul>
          </section>
        </div>
      </motion.div>
      <div className={`hidden lg:${styles.flexCenter} md:w-1/2 relative`}>
        <motion.div
          style={{
            x,
            scale,
          }}
          className="w-full h-full object-cover"
        >
          <Image src={blockchain} width={600} height={600} alt="cubo" />
        </motion.div>
        <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="absolute w-1/2"
        >
          <Image
            src={phone}
            width={1000}
            height={1000}
            alt="phone"
            className="rotate-[5deg]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y }}
          viewport={{ once: false, amount: 0.9 }}
          className="absolute left-40 top-5"
        >
          <Image src={personOne} width={150} height={20} alt="personPhone" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.9 }}
          style={{ y }}
          className="absolute right-32 top-52"
        >
          <Image src={personTwo} width={150} height={20} alt="personPhone" />
        </motion.div>
      </div>
      <section className="flex flex-col mt-10 lg:hidden md:items-center relative">
        <Image className="z-10" src={ecoImg} width={500} height={500} alt="" />
        <Image
          className="absolute z-[1]"
          width={500}
          height={500}
          src={backgroundImg}
          alt=""
        />
      </section>
    </motion.section>
  );
};

export default ProblemSolution;
