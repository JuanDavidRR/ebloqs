"use client"

import DownloadBtn from "@/components/DownloadBtn";
import InfoItemSolution from "@/components/InfoItemSolution";
import styles from "@/styles";
import { Variants, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import React, { useRef } from "react";
import { AiOutlineBulb, AiOutlineLineChart } from "react-icons/ai";
import { BsCoin, BsWallet2 } from "react-icons/bs";

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
      className={`flex flex-col bg-primary ${styles.paddings} gap-14 relative`}
      ref={scrollRef}
    >
      <div className="flex">
        <div className="w-1/2 flex flex-col gap-12">
          <div className="flex flex-col justify-center items-center text-white gap-5">
            <h2>Ecosistema</h2>
            <p className="text-sm text-center">La plataforma se encuentra en la red Polygon, que permite crear aplicaciones seguras y fáciles de usar.
              Sobre todo con tarifas de transacción bajas, es más usa el poder de Ethereum.
            </p>
          </div>
          <div className="grid grid-cols-2 items-center justify-center gap-12">
            <InfoItemSolution
              icon={
                <AiOutlineBulb className="text-primary-purple" />
              }
              title="Ecosistema"
              mode="dark"
              description="Primero tiene componentes de arquitectura formada por el consenso, mediante el cual todos los nodos de la red deben llegar a un acuerdo.  En segundo lugar, tiene estándar  ERC-20 de tokens fungibles que permite crear, transferir, consultar balances y realizar todo tipo de operaciones, finalmente tiene el ERC-721 de tokens no fungibles, igual que, poder crear NFTs, que se asocian con un identificador irrepetible. No obstante, es nativo para web3, DeFi y Metaverso."
            />
            <ul className="flex flex-col text-white gap-9">
              <li className="flex items-center gap-5">
                <div className="bg-white rounded-full p-2 border border-primary-purple">
                  <AiOutlineLineChart className="text-primary-purple"/>
                </div>
                <p>
                  Inversión en línea
                </p>
              </li>
              <li className="flex items-center gap-5">
                <div className="bg-white rounded-full p-2 border border-primary-purple">
                  <BsCoin className="text-primary-purple"/>
                </div>
                <p>
                  Datos del mercado Criptomonedas
                </p>
              </li>
              <li className="flex items-center gap-5">
                <div className="bg-white rounded-full p-2 border border-primary-purple">
                  <BsWallet2 className="text-primary-purple"/>
                </div>
                <p>
                  Billetera propia
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-1/2 justify-center items-center relative">
           <Image
              src="/images/phoneExample.png"
              alt="phone"
              width={300}
              height={300}
              className="z-20"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: false, amount: 0.90 }}
              style={{ y }}
              className="absolute right-32 top-20 z-20"
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
              viewport={{ once: false, amount: 0.90 }}
              style={{ y }}
              className="absolute left-12 top-52 rounded-md bg-[#151a38] bg-opacity-70 flex flex-col pr-12 pl-4 py-2 z-20"
            >
              <Image
                src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"}
                width={50}
                height={20}
                className="rounded-full"
                alt="personPhone"
              />

              <p className="text-white text-base font-bold">
                Juan Diego
              </p>
              <p className="text-[#828bac] text-sm">
                Desarrollador
              </p>
            </motion.div>
          <div className="grid grid-cols-2 w-full">
            <DownloadBtn SO="android" outline={false} className="levitating-object w-full"/>
            <DownloadBtn SO="apple" outline={false} className="levitating-object w-full" />
          </div>
        </div>
      </div>
    </section>
  )
   
};

export default Ecosystem;
