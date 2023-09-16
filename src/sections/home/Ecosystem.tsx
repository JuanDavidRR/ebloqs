"use client";

import DownloadBtn from "@/components/DownloadBtn";
import InfoItemSolution from "@/components/InfoItemSolution";
import styles from "@/styles";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { AiOutlineBulb, AiOutlineLineChart } from "react-icons/ai";
import { BsCoin, BsWallet2 } from "react-icons/bs";
import ecoImg from "public/images/mockup/4.png";
import { fadeIn } from "@/utils/animations/motion";
import { FadeText, TypingText } from "@/components/CustomTexts";

const Ecosystem = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: [0, 20],
  });

  const y = useTransform(scrollYProgress, [0, 0.1], ["1%", "100%"], {
    clamp: true,
  });
  return (
    <section
      className={`flex flex-col bg-black-market ${styles.paddings} gap-14 relative`}
      ref={scrollRef}
      id="ecosistema"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col gap-8 w-full`}
      >
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="flex-1 flex flex-col md:flex-row gap-12">
            <div className="flex flex-col justify-center text-white gap-5 z-10">
              <TypingText
                element="h3"
                title="¿Conoces el poder de Blockchain?"
                textStyles="text-lg sm:text-2xl flex flex-wrap"
              />
              <FadeText heading="h2" textStyles="" delay={0} direction="right">
                Nuestro Ecosistema
              </FadeText>
              <motion.section
                variants={fadeIn("up", "tween", 0.1, 1)}
                className="flex flex-col gap-10"
              >
                <p>
                  Ebloqs hace todo mas sencillo: accede a las redes más seguras
                  y fáciles de usar con el costo más bajo de transacción.
                </p>
                <p>
                  ¿Tienes conocimiento del universo Crypto? ¡No hay problema!
                  Haz parte de proyectos en diferentes industrias como las
                  bienes raíces, hotelería y turismo, tecnología, automotriz,
                  música, arte y NFTs ¡Entre muchos más!.
                </p>
              </motion.section>

              <Image src="/images/esquema/1.png" className="hidden lg:block" alt="esquema ebloqs" width={1500} height={1500}/>
              <Image src="/images/esquemaMobile/1.png" className="lg:hidden" alt="esquema ebloqs" width={1500} height={1500}/>
              
            </div>
          </div>
          <div className="hidden flex-[0.7] lg:flex flex-col w-1/2 justify-center items-center relative">
            <div className="flex items-center gap-10 mb-10 z-10">
              <DownloadBtn
                SO="android"
                outline={false}
                className="levitating-object w-full"
              />
              <DownloadBtn
                SO="apple"
                outline={false}
                className="levitating-object w-full"
              />
            </div>
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="gradient-01"
            />
            <Image
              src="/images/mockup/6.png"
              alt="phone"
              width={400}
              height={400}
              className="z-20 w-1/2"
            />

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.9 }}
              style={{ y }}
              className="absolute right-32 z-20"
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
              viewport={{ once: false, amount: 0.2 }}
              style={{
                y,
                width: y,
              }}
              className="absolute left-24 top-1 hidden"
            >
              <Image
                src={"/images/line.png"}
                width={250}
                height={250}
                className="brightness-200"
                alt="line"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.9 }}
              style={{ y }}
              className="absolute left-12 top-52 rounded-md bg-[#151a38] bg-opacity-70 flex flex-col pr-12 pl-4 py-2 z-20"
            >
              <Image
                src={
                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
                }
                width={50}
                height={20}
                className="rounded-full"
                alt="personPhone"
              />

              <p className="text-white text-base font-bold">Juan Diego</p>
              <p className="text-[#828bac] text-sm">Desarrollador</p>
            </motion.div>
          </div>
          <section className="flex flex-col md:items-center mt-10 lg:hidden relative">
            <div className="flex flex-col z-10">
              <Image src={ecoImg} width={500} height={500} alt="" />
            </div>
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="gradient-01"
            />
            <div className="flex flex-col md:justify-center md:flex-row gap-10 md:mt-16 mt-7">
              <DownloadBtn
                SO="android"
                outline={false}
                className="levitating-object w-full"
              />
              <DownloadBtn
                SO="apple"
                outline={false}
                className="levitating-object w-full"
              />
            </div>
          </section>
        </div>
      </motion.div>
    </section>
  );
};

export default Ecosystem;
