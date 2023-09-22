"use client";

import styles from "@/styles";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import React, { useRef, useState } from "react";
import { tabs } from "@/utils/constants/tabs";
import { fadeIn } from "@/utils/animations/motion";
import logoNegro from "public/images/logo-negro.png";
import Image from "next/image";
import { FaChartLine, FaCoins, FaServer } from "react-icons/fa";
import Button from "@/components/Button";
import { BiAbacus, BiSolidDoughnutChart } from "react-icons/bi";

// export const allIngredients = [
//   { icon: "🪙", label: "$50 USD", description: "Ingresos al 10%" },
//   { icon: "🪙", label: "6 Meses", description: "Ingresos al 50%" },
//   { icon: "🪙", label: "1 Año", description: "Ingresos al 100%" },
// ];

// const [tomato, lettuce, cheese] = allIngredients;
// export const initialTabs = [tomato, lettuce, cheese];

const Calculator = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleRangeChange = (event) => {
    const newIndex = parseInt(event.target.value);
    setActiveContentIndex(newIndex);
    setSelectedTab(tabs[newIndex]);
  };

  const handleButtonClick = (value) => {
    setActiveContentIndex(value);
    setSelectedTab(tabs[value]);
  };

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: [0, 20],
  });

  const y = useTransform(scrollYProgress, [0, 0.1], ["1%", "100%"], {
    clamp: true,
  });

  const activeContent = tabs[activeContentIndex];

  return (
    <section
      id="invierte"
      className={`${styles.paddings} w-full lg:w-[80%] mx-auto`}
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`mx-auto flex flex-col gap-8`}
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.1, 1)}
          className={`flex-1 flex justify-center flex-col gap-10`}
        >
          <div className="flex justify-center items-center p-1 md:p-7 bg-blue-200 rounded-xl">
            <div className="flex justify-center items-center p-1 md:p-5 background-gradient rounded-xl w-full">
              <div className="flex flex-col rounded-xl bg-white w-full p-5 md:p-16">
                <div className="flex items-center text-center justify-center">
                  <h2>
                    <span className="gradient-text font-bold">Roadmap</span>{" "}
                    ebloqs© 2023-2024
                  </h2>
                </div>
                <div className="text-center mt-10">
                  <p>
                    <em> Desliza o pulsa los botones para descubrir más sobre nuestro proceso</em>
                  </p>
                </div>
                <section className="grid grid-cols-5 items-center justify-between text-center gap-4 md:gap-3 lg:gap-8 my-5 md:my-10">
                  <div
                    onClick={() => handleButtonClick(0)}
                    className="flex-1 flex flex-col items-center justify-center text-center background-gradient cursor-pointer text-white p-2 md:p-5 lg:p-8 rounded-full w-full h-full"
                  >
                    <p className="text-2xl md:text-4xl xl:5xl">
                      <FaServer />
                    </p>
                  </div>
                  <div
                    onClick={() => handleButtonClick(1)}
                    className="flex-1 flex flex-col items-center justify-center text-center background-gradient cursor-pointer text-white p-2 md:p-5 lg:p-8 rounded-full w-full h-full"
                  >
                    <p className="text-2xl md:text-4xl xl:5xl">
                      <FaCoins />
                    </p>
                  </div>
                  <div
                    onClick={() => handleButtonClick(2)}
                    className="flex-1 flex flex-col items-center justify-center text-center background-gradient cursor-pointer text-white p-2 md:p-5 lg:p-8 rounded-full w-full h-full"
                  >
                    <p className="text-2xl md:text-4xl xl:5xl">
                      <BiAbacus />
                    </p>
                  </div>
                  <div
                    onClick={() => handleButtonClick(3)}
                    className="flex-1 flex flex-col items-center justify-center text-center background-gradient cursor-pointer text-white p-2 md:p-5 lg:p-8 rounded-full w-full h-full"
                  >
                    <p className="text-2xl md:text-4xl xl:5xl">
                      <BiSolidDoughnutChart />
                    </p>
                  </div>
                  <div
                    onClick={() => handleButtonClick(4)}
                    className="flex-1 flex flex-col items-center justify-center text-center background-gradient cursor-pointer text-white p-2 md:p-5 lg:p-8 rounded-full w-full h-full"
                  >
                    <p className="text-2xl md:text-4xl xl:5xl">
                      <FaChartLine />
                    </p>
                  </div>
                </section>

                <div className="flex flex-col items-center justify-center text-center">
                  <input
                    type="range"
                    min="0"
                    max={tabs.length - 1}
                    value={activeContentIndex}
                    onChange={handleRangeChange}
                    className="w-[85%] lg:w-[90%] h-10 my-5 lg:mb-10"
                  />
                  <AnimatePresence mode="wait">
                    <h3 className="text-center py-5">{activeContent.title}</h3>

                    <motion.div
                      key={selectedTab ? selectedTab.label : "empty"}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex flex-col gap-5 justify-center items-center text-5xl"
                    >
                      <div className={`${styles.btn} text-2xl`}>
                        {activeContent.period}
                      </div>
                      <h4>{activeContent.subtitle}</h4>
                      <p>{activeContent.description}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <div className="app"></div>
    </section>
  );
};

export default Calculator;
