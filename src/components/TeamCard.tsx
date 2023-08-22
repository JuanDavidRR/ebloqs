import Image from "next/image";
import Link from "next/link";
import React from "react";
import userImg from 'public/images/user.png'
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { AnimationControls, motion } from "framer-motion";

const TeamCard = ({fullname, job, quote, image, linkedin, animate}: TeamCardProps) => {
  return (
    <motion.section
      variants={{
        hiddenShadown: {
          boxShadow: "none",
        },
        showShadow: {
          boxShadow: "0 0 20px 5px rgba(0, 0, 0, 0.1)",
          transition: {duration: 3, ease: "anticipate" }
        }
      }}
      animate={animate}
      whileHover={{ scale: 1.1 }}
      className="card-items gap-8 my-10 -z-10 relative"
    >
        <div className="flex flex-col gap-0 text-center rounded-3xl">
          <div className="px-10">
            <Image
              src={"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"}
              width={300}
              height={200}
              className="rounded-full w-full"
              alt="imageTeam"
            />
          </div>
          <div className="flex px-5 pt-0 pb-5 flex-col gap-3">
            <h4 className="font-bold text-xl">{fullname}</h4>
            <h5>{job}</h5>
            <p className="text-sm">
             {quote}
            </p>
            <Link
              href={linkedin}
              className="flex gap-2 justify-center items-center text-white bg-blue-500 hover:bg-slate-900 duration-300 px-2 py-3 rounded-lg text-center"
            >
              <p>Seguir en Linkedin</p>
              <AiFillLinkedin className="text-2xl" />
            </Link>
          </div>
        </div>
    </motion.section>
  );
};

interface TeamCardProps {
  fullname: string;
  job: string;
  quote: string;
  image: string;
  linkedin: string;
  animate: AnimationControls
}
export default TeamCard;
