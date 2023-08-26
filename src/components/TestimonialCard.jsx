"use client";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "./Button";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations/motion";

const TestimonialCard = ({ fullname, image, quote, animation }) => {
  return (
    <motion.section
      variants={fadeIn("up", "tween", animation, 0)}
      className="text-slate-900 bg-white flex flex-col justify-center rounded-xl gap-5 p-5 duration-300 border-[1px] border-gray-300 shadow-lg shadow-black-market hover:shadow-lg hover:shadow-purple-600 odd:scale-[0.9]"
    >
      <div className="flex items-center gap-5">
        <div>
          <Image
            src={image}
            width={70}
            height={70}
            className="flex-[0.4] rounded-full"
            alt=""
          />
        </div>
        <section className="flex flex-col gap-3">
          <h5 className="text-2xl">{fullname}</h5>
          <div className="flex gap-1">
            <AiFillStar className="text-2xl md:text-3xl text-purple-900" />
            <AiFillStar className="text-2xl md:text-3xl text-purple-900" />
            <AiFillStar className="text-2xl md:text-3xl text-purple-900" />
            <AiFillStar className="text-2xl md:text-3xl text-purple-900" />
            <AiFillStar className="text-2xl md:text-3xl text-purple-900" />
          </div>
        </section>
      </div>
      <section>
        <p>{quote}</p>
      </section>
    </motion.section>
  );
};

export default TestimonialCard;
