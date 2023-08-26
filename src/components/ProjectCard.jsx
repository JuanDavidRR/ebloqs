import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations/motion";

const ProjectCard = ({ title, description, image, investors, goal, animation }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", animation, 0.5)}
      className="flex flex-col gap-5 text-center shadow-x bg-white text-black rounded-3xl hover:shadow-lg hover:shadow-primary-blue transit duration-300 md:odd:scale-[0.9]"
    >
      <Image
        src={image}
        className="w-full rounded-tl-3xl rounded-tr-3xl"
        width={300}
        height={200}
        alt=""
      />
      <div className="flex px-5 pt-0 pb-5 flex-col gap-3">
        <h4 className="font-bold text-xl">{title}</h4>
        <p>{description}</p>
        <p>Inversores: {investors}</p>
        <p>Meta: {goal}</p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
