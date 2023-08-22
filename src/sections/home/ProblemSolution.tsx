"use client";
import { TypingText } from "@/components/CustomTexts";
import InfoItemSolution from "@/components/InfoItemSolution";
import styles from "@/styles";
import { useScroll, useTransform, motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { AiOutlineAlert, AiOutlineBulb } from "react-icons/ai";

const ProblemSolution = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: [0, 20],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "100%"], {
    clamp: true,
  });

  const scale = useTransform(scrollYProgress, [0, 1.2], [1, 2], {
    clamp: true,
  });

  const y = useTransform(scrollYProgress, [0, 0.1], ["1%", "100%"], {
    clamp: true,
  });

  return (
    <section className={`pl-40 pr-10 flex py-20`} ref={scrollRef}>
      <div className="flex w-1/2 flex-col gap-14">
        <TypingText element="h3" title="Problema / solución" />
        <div className="grid grid-cols-2 gap-10">
          <InfoItemSolution
            title="Problema"
            description="La gran mayoría de las inversiones fomentan la exclusividad para los grandes inversionistas.
            Las fuentes de financiamiento cada vez son más limitadas y costosas. La falta de recursos para emprender frustra muchas veces, el inicio y desarrollo de un nuevo proyecto."
            icon={
              <AiOutlineAlert className="text-primary-purple" />
            }
            classNameTitle="gradient-text"
            mode="light"
          />
          <InfoItemSolution
            title="Solución"
            description="Por ello, estamos creando un ecosistema de bienes y servicios que permita a las empresas recaudar capital a través de la tokenización y a los inversionistas multiplicar sus ganancias.
            Definitivamente la tokenización es una forma de reducir el riesgo asociado a la inversión en activos digitales."
            icon={
              <AiOutlineBulb className="text-primary-purple" />
            }
            classNameTitle="gradient-text"
            mode="light"
          />
        </div>
      </div>
      <div className={`${styles.flexCenter} w-1/2 relative`} >
        <motion.div
          style={{
            x,
            scale
           }}
          className="w-full h-full object-cover opacity-60"
        >
          <Image
            src="/images/cuboBg.png"
            width={1000}
            height={1000}
            alt="cubo"
          />
        </motion.div>
        <motion.div
          className="absolute"
        >
          <Image
            src="/images/phoneExample.png"
            width={300}
            height={300}
            alt="phone"
            className="rotate-[5deg]"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ y }}
          viewport={{ once: false, amount: 0.90 }}
          className="absolute left-40 top-5"
        >
          <Image
            src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"}
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
          viewport={{ once: false, amount: 0.90 }}
          style={{ y }}
          className="absolute right-32 top-52"
        >
          <Image
            src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"}
            width={100}
            height={20}
            className="rounded-full border border-primary-purple"
            alt="personPhone"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSolution;
