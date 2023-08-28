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

// export const allIngredients = [
//   { icon: "🪙", label: "$50 USD", description: "Ingresos al 10%" },
//   { icon: "🪙", label: "6 Meses", description: "Ingresos al 50%" },
//   { icon: "🪙", label: "1 Año", description: "Ingresos al 100%" },
// ];

// const [tomato, lettuce, cheese] = allIngredients;
// export const initialTabs = [tomato, lettuce, cheese];

const Calculator = () => {
  const [activeContentIndex, setActiveContentIndex] = useState(0);

  const handleRangeChange = (event) => {
    const newIndex = parseInt(event.target.value);
    setActiveContentIndex(newIndex);
  };

  const activeContent = tabs[activeContentIndex];

  const [selectedTab, setSelectedTab] = useState(tabs[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: [0, 20],
  });

  const y = useTransform(scrollYProgress, [0, 0.1], ["1%", "100%"], {
    clamp: true,
  });
  return (
    <section id="invierte" className={`${styles.paddings} w-full lg:w-[80%] mx-auto`}>
      <div className="flex justify-center items-center p-1 md:p-7 bg-blue-200  rounded-xl">
        <div className="flex justify-center items-center p-1 md:p-5 background-gradient rounded-xl w-full">
          <div className="flex flex-col rounded-xl bg-white w-full p-5 md:p-20">
            <div className="flex items-center text-center justify-center">
              <h2>
                ¿Cuánto deseas {' '}
                <span className="gradient-text font-bold">invertir</span> {' '} con nosotros?
                <p>Desliza y descubre las oportunidades que Eblqs ofrece</p>
              </h2>
            </div>
            <div className="flex flex-col items-center justify-center text-center">
              <input
                type="range"
                min="0"
                max={tabs.length - 1}
                value={activeContentIndex}
                onChange={handleRangeChange}
                className="w-full h-10 mb-5"
              />
                <AnimatePresence mode="wait">
                  <h3 className="text-center">Invirtiendo {activeContent.label} con Ebloqs:</h3>

                  <motion.div
                    key={selectedTab ? selectedTab.label : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="min-h-[300px] flex justify-center items-center text-5xl"
                  >
                    
                    <p>Puedes obtener {activeContent.description} y muchos otros beneficios</p>
                  </motion.div>
                </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      <div className="app"></div>
    </section>
  );
};

export default Calculator;
