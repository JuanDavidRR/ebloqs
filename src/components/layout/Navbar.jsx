"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "@/styles";
import { links } from "@/utils/constants/menu";
import { motion } from "framer-motion";
import logo from "public/images/logo.png";
import Image from "next/image";
import Button from "../Button";

const Navbar = () => {
  const pathname = usePathname();

  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div className={`w-full z-40 px-7 fixed top-0 text-white `}>
      <div className="-z-10 myCircle w-full" />
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <div
          className={`flex justify-between items-center lg:px-40 md:px-20 py-3 lg:flex-row`}
        >
          <div>
            <Link className="font-bold text-xl" href="/">
              <Image src={logo} alt="Ebloqs Logo" width={100} height={100} />
            </Link>
          </div>
          <ul className={active ? "links activeM" : "links"}>
            {links.map((link) => {
              return (
                <li key={link.id}>
                  <Link
                    onClick={handleClick}
                    href={link.url}
                    className={pathname === link.url ? "active" : "link"}
                  >
                    {link.title}
                  </Link>
                </li>
              );
            })}
            <li>
              <Link className="" onClick={handleClick} href="/">
                <div
                  className={`px-5 py-1 border-2 border-primary-blue transition duration-400 snap-x snap-proximity snap-center shadow-sm shadow-primary-blue hover:transform hover:scale-105 hover:shadow-md hover:shadow-primary-blue`}
                >
                  Descargar
                </div>
              </Link>
            </li>
          </ul>
          <div
            onClick={handleClick}
            className="lg:hidden block absolute top-4 right-5"
          >
            {active ? (
              <AiOutlineClose className="text-2xl md:text-4xl" />
            ) : (
              <AiOutlineMenu className="text-2xl md:text-4xl" />
            )}
          </div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
