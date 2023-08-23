"use client"

import { TypingText } from "@/components/CustomTexts";
import TestimonialCard from "@/components/TestimonialCard";
import styles from "@/styles";
import { motion } from "framer-motion";
import { testimonials } from "@/utils/constants/testimonials";
import Image from "next/image";
import React from "react";
import img from 'public/images/9.png'
import { fadeIn, staggerContainer } from "@/utils/animations/motion";

const Testimonials = () => {
  return (
    <motion.section variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
     className={`${styles.paddings} flex flex-col gap-5 md:gap-32 md:flex-row text-white bg-primary p-5 z-10 relative`}>
     <section className="flex-1">
     <TypingText element="h3" title="| Testimonios" />
      <h2>Lo que nuestros usuarios opinan</h2>
      <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-0 md:gap-6 my-10">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.id} {...testimonial} />
        ))}
      </section>
     </section>
     <motion.section
          variants={fadeIn("up", "tween", 0.5, 1)}
          className="flex-1 h-full justify-center flex flex-col gap-10"
        >
          <Image
            src={img}
            className="w-full relative top-10"
            alt=""
            height={1500}
            width={1500}
          />
          <h2 className="text-center">Imagen de prueba :c</h2>
        </motion.section>
    </motion.section>
  );
};

export default Testimonials;
