import React from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

const ImageEvolution = () => {
  return (
    <div>
      {/* descktop */}
      <div className='hidden justify-center items-center w-full relative md:flex'>
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
          <Image src="/images/dinero/1.png" width={1200} height={1000} alt='center'/>
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
          <Image src="/images/dinero/5.png" width={1200} height={1000} alt='center'/>
        </motion.div>
        <motion.div
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
          <Image src="/images/dinero/6.png" width={1200} height={1000} alt='center'/>
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
          <Image src="/images/dineroMobile/2.png" width={300} height={300} alt='center'/>
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
          <Image src="/images/dineroMobile/4.png" width={300} height={300} alt='center'/>
        </motion.div>
        <motion.div
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
          <Image src="/images/dineroMobile/5.png" width={300} height={300} alt='center'/>
        </motion.div>
      </div>
    </div>
  )
}

export default ImageEvolution;
