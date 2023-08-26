"use client";

import { TypingText } from "@/components/CustomTexts";
import TestimonialCard from "@/components/TestimonialCard";
import styles from "@/styles";
import { motion } from "framer-motion";
import { testimonials } from "@/utils/constants/testimonials";
import Image from "next/image";
import React from "react";
import img from "public/images/9.png";
import { fadeIn, staggerContainer } from "@/utils/animations/motion";

const Testimonials = () => {
  return (
    <motion.section
    id="testimonios"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.paddings} flex flex-col items-center gap-5 md:gap-16 md:flex-row p-5 z-10 relative`}
    >

      <section className="flex-1">
        <TypingText textStyles="text-center" element="h3" title="| Testimonios" />
        <h2 className="text-center">Lo que <span className="font-bold gradient-text">nuestros usuarios</span> opinan</h2>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-10 md:gap-16 my-20">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
        </section>
      </section>
    </motion.section>
  );
};

export default Testimonials;
