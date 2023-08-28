"use client";

import DownloadBtn from "@/components/DownloadBtn";
import InfoItemSolution from "@/components/InfoItemSolution";
import styles from "@/styles";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { AiOutlineBulb, AiOutlineLineChart } from "react-icons/ai";
import { BsCoin, BsWallet2 } from "react-icons/bs";
import ecoImg from "public/images/1.png";
import { fadeIn } from "@/utils/animations/motion";
import { TypingText } from "@/components/CustomTexts";

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
      <div className="flex flex-col lg:flex-row gap-20">
        <div className="flex-1 flex flex-col md:flex-row gap-12">
          <div className="flex flex-col justify-center text-white gap-5 z-10">
            <TypingText element="h4" title="| Haz parte del futuro" />
            <h2> Nuestro Ecosistema</h2>
            <p>
              La plataforma se encuentra en la red Polygon, que permite crear
              aplicaciones seguras y fáciles de usar. Sobre todo con tarifas de
              transacción bajas, es más usa el poder de Ethereum.
            </p>
            <div className="flex-col md:flex-row items-center justify-center gap-12">
              <p>
                Primero tiene componentes de arquitectura formada por el
                consenso, mediante el cual todos los nodos de la red deben
                llegar a un acuerdo. En segundo lugar, tiene estándar ERC-20 de
                tokens fungibles que permite crear, transferir, consultar
                balances y realizar todo tipo de operaciones, finalmente tiene
                el ERC-721 de tokens no fungibles, igual que, poder crear NFTs,
                que se asocian con un identificador irrepetible. No obstante, es
                nativo para web3, DeFi y Metaverso.
              </p>
              <ul className="flex mt-10 flex-col text-white gap-9">
                <li className="flex items-center gap-5">
                  <div className="bg-white rounded-full p-2 border border-primary-purple">
                    <AiOutlineLineChart className="text-primary-purple text-2xl" />
                  </div>
                  <p>Inversión en línea</p>
                </li>
                <li className="flex items-center gap-5">
                  <div className="bg-white rounded-full p-2 border border-primary-purple">
                    <BsCoin className="text-primary-purple text-2xl" />
                  </div>
                  <p>Datos del mercado Criptomonedas</p>
                </li>
                <li className="flex items-center gap-5">
                  <div className="bg-white rounded-full p-2 border border-primary-purple">
                    <BsWallet2 className="text-primary-purple text-2xl" />
                  </div>
                  <p>Billetera propia</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="hidden flex-[0.7] lg:flex flex-col w-1/2 justify-center items-center relative">
          <motion.div
            variants={fadeIn("up", "tween", 0.5, 1)}
            className="gradient-01"
          />
          <Image
            src="/images/phoneExample.png"
            alt="phone"
            width={350}
            height={350}
            className="z-20"
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
            viewport={{ once: false, amount: 0.9 }}
            style={{ y }}
            className="absolute left-24 top-1"
          >
            <Image
              src={"/images/line.png"}
              width={200}
              height={200}
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
          <div className="flex items-center gap-10">
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
    </section>
  );
};

export default Ecosystem;
