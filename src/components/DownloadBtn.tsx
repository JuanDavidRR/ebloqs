"use client"
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations/motion";
import { BsApple, BsGooglePlay } from "react-icons/bs";
import styles from "@/styles";

const DownloadBtn = ({ SO, outline, className }: DownloadBtnProps) => {
  return (
    <motion.div
      // variants={fadeIn("up", "tween", 0.5, 1)}
      initial="show"
      whileInView="show"
      className={className}
    >
      <Link
        href={SO === "android" ? "/" : "/"}
        className={`${outline === true ? styles.downloadBtn + ' ' + styles.outlineBtn : styles.downloadBtn} `}
      >
        <div className="flex flex-col items-center justify-center gap-3">
          <span>Descarga Gratis</span>
          {SO === "android" ? (
            <span className="flex items-center gap-3">
               <BsGooglePlay className="text-3xl" /> Google Play
            </span>
          ) : (
            <span className="flex items-center gap-3">
               <BsApple className="text-3xl"/> App Store
            </span>
          )}
        </div>
        <div className={outline === true ? " " : "button-border"}></div>
      </Link>
    </motion.div>
  );
};

interface DownloadBtnProps {
  SO: string;
  outline?: boolean;
  className?: string;
}
export default DownloadBtn;
