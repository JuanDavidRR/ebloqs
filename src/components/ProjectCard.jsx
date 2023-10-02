import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations/motion";
import Button from "./Button";

const ProjectCard = ({ title, description, image, investors, goal, animation }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", animation, 0.5)}
      className="flex-1 flex flex-col gap-5 text-center shadow-x bg-white text-black rounded-3xl hover:shadow-lg hover:shadow-primary-blue transit duration-300 md:odd:scale-[0.9]"
    >
      <Image
        src={image}
        className="w-full rounded-tl-3xl rounded-tr-3xl"
        width={1000}
        height={1000}
        alt=""
      />
      <div className="flex px-5 pt-0 pb-5 flex-col gap-3">
        <h4 className="font-bold text-2xl">{title}</h4>
        <p>{description}</p>
        <p>Inversión mínima: ${investors} USD</p>
          <Button content='Descargar Whitepaper' url={goal} styleText='mx-auto my-3'/>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
