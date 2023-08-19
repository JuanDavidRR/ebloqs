"use client";
import Image from "next/image";
import React from "react";
import { AiFillStar } from "react-icons/ai";
import Button from "./Button";

const TestimonialCard = ({fullname, image, quote}) => {
  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:gap-6 my-10">
      <section className="text-slate-900 bg-white flex flex-col rounded-xl gap-5 p-5 duration-300 hover:shadow-lg hover:shadow-purple-600 sha">
        <div className="flex gap-5">
          <Image
            src={image}
            width={60}
            height={20}
            className="rounded-full"
            alt=""
          />
          <div className="flex flex-col gap-3">
            <h4>{fullname}</h4>
            <div className="flex gap-1">
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
            </div>
          </div>
        </div>
        <section>
          <p>
            {quote}
          </p>
        </section>
      </section>
    </section>
  );
};

export default TestimonialCard;
