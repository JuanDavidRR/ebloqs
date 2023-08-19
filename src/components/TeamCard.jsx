import Image from "next/image";
import Link from "next/link";
import React from "react";
import userImg from 'public/images/user.png'
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

const TeamCard = ({fullname, job, quote, image, linkedin}) => {
  return (
    <section className="card-items gap-6 my-10">
        <div className="flex flex-col gap-0 text-center shadow-xl border-gray-300 border-[1px] shadow-slate-300 rounded-3xl hover:shadow-2xl hover:shadow-slate-800 transit duration-300">
          <Image
            src={userImg}
            width={300}
            height={300}
            className="w-full"
            alt=""
          />
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
    </section>
  );
};

export default TeamCard;
