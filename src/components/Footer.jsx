"use client";
import React from "react";
import DownloadBtn from "./DownloadBtn";
import { links } from "@/utils/constants/menu";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations/motion";
import styles from "@/styles";
import { social } from "@/utils/constants/social";

const Footer = () => {
  return (
    <footer className={`${styles.paddings} flex flex-col lg:flex-row justify-between gap-5 lg:gap-20 text-center lg:text-left bg-slate-900 text-white`}>
      <section className="flex flex-col justify-between">
        <div className="flex flex-col gap-3">
          <h2>Ebloqs</h2>
          <h4>Alguna vaina aquí, no sé</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae
            consectetur quisquam autem odio asperiores
          </p>
        </div>
        <div>Ebloqs derechos reservados</div>
      </section>
      <section>
        <section>
          <motion.section
            variants={fadeIn("up", "tween", 2.5, 1)}
            className="flex flex-col lg:flex-row gap-10 mb-10"
          >
            <DownloadBtn SO="android" outline={true}/>
            <DownloadBtn SO="apple" outline={true}/>
          </motion.section>
        </section>
        <section>
          <h4>Explora Ebloqs</h4>
          <div>
            <ul className="flex flex-col lg:flex-row gap-4">
              {links.slice(1).map((link) => (
                <li key={link.id}>
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
            </ul>
            <h4>Nuestras redes</h4>
            <ul className="flex gap-4">
            {social.map((link) => (
                <li key={link.id}>
                  <Link href={link.link}>{link.icon}</Link>
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
