"use client"

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations/motion";
import styles from "@/styles";

const Button = ({ url, content }) => {
  return (
    <motion.div
      variants={fadeIn("up", "tween", 0.5, 1)}
      initial="hidden"
      whileInView="show"
    >
      <Link href={url} className={`${styles.btn}`}>
        {content}
      </Link>
      
    </motion.div>
  );
};

export default Button;
