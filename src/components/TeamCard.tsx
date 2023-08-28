import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { AnimationControls, motion } from "framer-motion";
import { fadeIn } from "@/utils/animations/motion";

const TeamCard = ({
  fullname,
  job,
  quote,
  image,
  linkedin,
  animate,
  animation,
}: TeamCardProps) => {
  return (
    <motion.section
      // variants={
      //   {
      //   hiddenShadown: {
      //     boxShadow: "none",
      //   },

      //   showShadow: {
      //     boxShadow: "10px 10px 20px 5px rgba(0, 0, 0, 0.5)",
      //     transition: {duration: 3, ease: "anticipate" },
      //   }
      // }}
      // animate={animate}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        variants={fadeIn("up", "tween", animation, 0.5)}
        className="flex flex-col bg-white gap-0 text-center shadow-md shadow-gray-500 p-5"
      >
        <div>
          <Image
            src={image}
            width={500}
            height={500}
            className="w-1/2 mx-auto mb-5"
            alt="imageTeam"
          />
        </div>
        <div className="flex pb-5 flex-col gap-3">
          <h4 className="font-bold text-2xl">{fullname}</h4>
          <h5 className="font-semibold text-xl">{job}</h5>
          <p>{quote}</p>
          <Link
            href={linkedin}
            className="flex gap-2 justify-center items-center text-white bg-blue-500 hover:bg-slate-900 duration-300 px-2 py-3 mt-5 rounded-lg text-center"
          >
            <p>Seguir en Linkedin</p>
            <AiFillLinkedin className="text-2xl" />
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

interface TeamCardProps {
  fullname: string;
  job: string;
  quote: string;
  image: StaticImageData;
  linkedin: string;
  animate: AnimationControls;
  animation: number;
}
export default TeamCard;
