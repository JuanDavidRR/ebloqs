"use client";
import { TypingText } from "@/components/CustomTexts";
import InfoItemSolution from "@/components/InfoItemSolution";
import styles from "@/styles";
import backgroundImg from "public/images/fondo.png";
import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { AiOutlineAlert, AiOutlineBulb } from "react-icons/ai";
import ecoImg from "public/images/1.png";
import { fadeIn } from "@/utils/animations/motion";
import blockchain from "public/images/blockchain.png";
import phone from 'public/images/phoneExample.png'

const ProblemSolution = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: [0, 20],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "25%"], {
    clamp: true,
  });

  const scale = useTransform(scrollYProgress, [0, 1.2], [1, 1.5], {
    clamp: true,
  });

  const y = useTransform(scrollYProgress, [0, 0.1], ["1%", "100%"], {
    clamp: true,
  });

  return (
    <section
      className={`${styles.paddings} lg:pl-40 lg:pr-10 flex gap-5 md:gap-28 flex-col lg:flex-row lg:py-20`}
      ref={scrollRef}
    >
      <div className="flex lg:w-1/2 flex-col gap-7">
        <TypingText element="h4" title="| Haz parte del futuro" />
        <h2>Problema & solución</h2>
        <div className="flex flex-col md:flex-row gap-10">
          <InfoItemSolution
            title="Problema"
            description="La gran mayoría de las inversiones fomentan la exclusividad para los grandes inversionistas.
            Las fuentes de financiamiento cada vez son más limitadas y costosas. La falta de recursos para emprender frustra muchas veces, el inicio y desarrollo de un nuevo proyecto."
            icon={<AiOutlineAlert className="text-primary-purple text-5xl" />}
            classNameTitle="gradient-text"
            mode="light"
          />
          <InfoItemSolution
            title="Solución"
            description="Por ello, estamos creando un ecosistema de bienes y servicios que permita a las empresas recaudar capital a través de la tokenización y a los inversionistas multiplicar sus ganancias.
            Definitivamente la tokenización es una forma de reducir el riesgo asociado a la inversión en activos digitales."
            icon={<AiOutlineBulb className="text-primary-purple text-5xl" />}
            classNameTitle="gradient-text"
            mode="light"
          />
        </div>
      </div>
      <div className={`hidden md:${styles.flexCenter} md:w-1/2 relative`}>
        <motion.div
          style={{
            x,
            scale,
          }}
          className="w-full h-full object-cover"
        >
          <Image
            src={blockchain}
            width={650}
            height={650}
            alt="cubo"
          />
        </motion.div>
        <motion.div className="absolute">
          <Image
            src={phone}
            width={400}
            height={400}
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
          <Image
            src={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            }
            width={100}
            height={20}
            className="rounded-full border border-primary-purple"
            alt="personPhone"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.9 }}
          style={{ y }}
          className="absolute right-32 top-52"
        >
          <Image
            src={
              "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            }
            width={100}
            height={20}
            className="rounded-full border border-primary-purple"
            alt="personPhone"
          />
        </motion.div>
      </div>
      <section className="flex flex-col mt-10 md:hidden relative">
      <motion.div
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="gradient-01 z-0"
        />
        <Image className="z-10" src={ecoImg} width={500} height={500} alt="" />
        <Image className="absolute z-[1]" width={500} height={500} src={backgroundImg} alt=""/>
      </section>
    </section>
  );
};

export default ProblemSolution;
