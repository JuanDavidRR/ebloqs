import Image from "next/image";
import React from "react";

const ProjectCard = ({ title, description, image, investors, goal }) => {
  return (
    <div className="flex flex-col gap-5 text-center shadow-x bg-white text-black rounded-3xl hover:shadow-lg hover:shadow-primary-blue transit duration-300 md:odd:scale-[0.9]">
      <Image src={image} className="w-full rounded-tl-3xl rounded-tr-3xl" width={300} height={200} alt="" />
      <div className="flex px-5 pt-0 pb-5 flex-col gap-3">
        <h4 className="font-bold text-xl">{title}</h4>
        <p>{description}</p>
        <p>Inversores: {investors}</p>
        <p>Meta: {goal}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
