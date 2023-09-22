import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';
import styles from '@/styles';

const ImageIco = () => {
  return (
    <div className='mt-10'>
      {/* descktop */}
      <div className='hidden justify-center items-center w-full relative md:flex'>
        <motion.div
          variants={{
            hidden: {
              x: -100,
              opacity: 0
            },
            show: {
              x: 0, 
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Image src="/images/graficoico/9.png" width={1500} height={1500} alt="EBL ICO"/>
        </motion.div>
        <motion.div
          variants={{
            hidden: {
              x: 100,
              opacity: 0
            },
            show: {
              x: 0,
              opacity: 1,
              transition: {
                duration: 0.5,
                delay: 0.5
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          className='absolute'
          viewport={{ once: false, amount: 0.25 }}
        >
          <Image src="/images/graficoico/8.png" width={1500} height={1500} alt="EBL ICO"/>
        </motion.div>
        <ComponentsText/>
     
      </div>

      {/* mobile */}
      <div className='flex justify-center items-center w-full relative md:hidden'>
        <motion.div
          variants={{
            hidden: {
              scale: 1.5, 
              opacity: 0
            },
            show: {
              scale: 1, 
              opacity: 1,
              transition: {
                duration: 0.5,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
        >
          <Image src="/images/graficoico/ico-mobile.png" width={1500} height={1500} alt='center'/>
        </motion.div>
        <ComponentsText/>
      </div>
    </div>
  )
}

const ComponentsText = () => (
  <>
    <motion.div
      variants={{
        hidden: {
          x: 100,
          opacity: 0
        },
        show: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 1
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      className='absolute w-[64%] top-[9%] right-3 sm:w-auto md:left-[23%] md:-top-[25%] lg2:-top-[10%] xl2:-top-[10%]'
      viewport={{ once: false, amount: 0.25 }}
    >
      <div className='text-xs md:leading-3 lg:leading-[0.8rem] lg:text-base flex flex-col gap-3'>
        <h5 className="font-semibold">Ronda Privada</h5>
        <ul className="list-none text-[5px] flex flex-col gap-3">
          <li>EBL 5.000.000</li>
          <li>Precio por token USD 0.08</li>
          <li>Inversión mínima USD 50</li>
          <li>Bloqueo 12 meses</li>
        </ul>
      </div>
    </motion.div>
    <motion.div
      variants={{
        hidden: {
          x: 100,
          opacity: 0
        },
        show: {
          x: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 1
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      className='absolute w-[64%] top-[41%] right-3 md:w-auto md:left-[23%] md:top-[80%] lg:left-[23%] lg:-bottom-[10%]'
      viewport={{ once: false, amount: 0.25 }}
    >
        <div className='text-xs md:leading-3 md:text-base flex flex-col gap-3'>
          <h5 className="font-semibold">Pre Venta</h5>
          <ul className="list-none flex flex-col gap-3">
            <li>EBL 15.000.000</li>
            <li>Precio por token USD 0.10</li>
            <li>Inversión mínima USD 100</li>
            <li>Bloqueo 12 meses</li>
          </ul>
        </div>
      </motion.div><motion.div
        variants={{
          hidden: {
            x: 100,
            opacity: 0
          },
          show: {
            x: 0,
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 1.5
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        className='absolute w-[64%] lg:w-1/2 right-3 bottom-[12%] md:-right-[10%] md:bottom-[37%] lg:bottom-[36%] lg2:-right-[2%] xl2:-right-[2%] xl2:bottom-[40%]'
        viewport={{ once: false, amount: 0.25 }}
      >
        <h4 className="text-[20px] md:text-[17px] lg2:text-2xl xl2:text-3xl text-left flex flex-col text-black md:text-center md:text-white">
          <span>Alta rentabilidad al lanzar</span>
          <span>ICO con plataforma</span>
          <span>operativa en
            Blockchain</span>
        </h4>

      </motion.div>
    </>
);

export default ImageIco;
