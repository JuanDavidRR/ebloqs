import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const ImageEcosystem = () => {
  return (
    <div>
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
          <Image src="/images/esquema/3.png" width={1500} height={1500} alt='center'/>
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
          <Image src="/images/esquema/2.png" width={1500} height={1500} alt='center'/>
        </motion.div>
     
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
          <Image src="/images/esquemaMobile/3.png" width={1500} height={1500} alt='center'/>
        </motion.div>
        <motion.div
          variants={{
            hidden: {
              scale: 0,
            },
            show: {
              scale: 1,
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
          <Image src="/images/esquemaMobile/2.png" width={1500} height={1500} alt='center'/>
        </motion.div>
        {/* <motion.div
          variants={{
            hidden: {
              scale: 2,
              opacity: 0
            },
            show: {
              scale: 1,
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
          <Image src="/images/dineroMobile/4.png" width={500} height={500} alt='center'/>
        </motion.div> */}
      </div>
    </div>
  )
}

export default ImageEcosystem;
