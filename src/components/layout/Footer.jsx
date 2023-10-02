"use client";
import React from "react";
import DownloadBtn from "../DownloadBtn";
import { links } from "@/utils/constants/menu";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations/motion";
import styles from "@/styles";
import { social } from "@/utils/constants/social";
import Image from "next/image";
import logo from "public/images/logo.png";

const Footer = () => {
  return (
    <footer
      className={`${styles.paddings} flex flex-col lg:flex-row justify-between gap-5 lg:gap-56 text-center lg:text-left bg-slate-900 text-white relative`}
    >
      <section className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <div className="mx-auto lg:mx-0">
            <Image src={logo} alt="" width={200} height={200}/>
          </div>
          <h4>La nueva forma de invertir</h4>
          <p>
            Ebloqs compañía europea con licencia VASP NTR 4400-1839-5132
          </p>
        </div>
        <p>Ebloqs derechos reservados. Consulta nuestros <Link className="text-primary-blue" href='https://drive.google.com/file/d/1JkUiDILwH4-eDwfUZs_mD02HUiEiSThX/view?usp=sharing' target="_blank">Términos y condiciones</Link></p>
      </section>
      <div className="footer-gradient" />
      <section className="flex flex-col gap-5">
        <section>
          <motion.section
            variants={fadeIn("up", "tween", 2.5, 1)}
            className="flex flex-col md:justify-center md:flex-row gap-10 mt-7"
          >
            <DownloadBtn SO="android" outline={true} />
            <DownloadBtn SO="apple" outline={true} />
          </motion.section>
        </section>
        <section className="flex flex-col md:mt-10 gap-5 z-10">
          <h4>Explora Ebloqs</h4>
          <div className="flex flex-col gap-5">
            <ul className="flex flex-col lg:flex-row gap-4">
              {links.slice(1).map((link) => (
                <li key={link.id}>
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <h4>Nuestras redes</h4>
            <ul className="flex justify-center lg:justify-start gap-5">
              {social.map((link) => (
                <li key={link.id}>
                  <Link className="text-2xl" href={link.link} target="_blank">{link.icon}</Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
