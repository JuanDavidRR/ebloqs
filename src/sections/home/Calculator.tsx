"use client"

import styles from "@/styles";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";

export const allIngredients = [
  { icon: "🪙", label: "1 Mes", description: "Ingresos al 10%" },
  { icon: "🪙", label: "6 Meses", description: "Ingresos al 50%" },
  { icon: "🪙", label: "1 Año", description: "Ingresos al 100%" },
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

const Calculator = () => {
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: [0, 20],
  });

  const y = useTransform(scrollYProgress, [0, 0.1], ["1%", "100%"], {
    clamp: true,
  });
  return (
    <section className={`${styles.paddings}`}>
      <div className="flex justify-center items-center p-5 bg-tertiary rounded-xl">
        <div className="flex justify-center items-center p-5 bg-secondary rounded-xl w-full">
          <div className="flex flex-col rounded-xl bg-white w-full py-12">
            <div className="flex items-center justify-center">
              <h3>
                Calcula tu <span className="gradient-text text-inherit">inversión</span>
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center box-shadown mx-32 rounded-xl">
              <nav className="w-full">
                <ul className="grid grid-cols-3 mt-3 mx-4 cursor-pointer">
                  {initialTabs.map((item) => (
                    <li
                      key={item.label}
                      className={`${item === selectedTab ? "bg-gray-300" : ""} rounded-t-lg py-5 relative`}
                      onClick={() => setSelectedTab(item)}
                    >
                      <p className="px-5">
                        {`${item.icon} ${item.label}`}
                      </p>
                      {item === selectedTab ? (
                        <motion.div
                          className="border border-primary-purple absolute w-full bottom-0"
                          layoutId="underline" 
                        />
                       ) : null}
                    </li>
                  ))}
                </ul>
              </nav>
              <main>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedTab ? selectedTab.label : "empty"}
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -10, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="min-h-[300px] flex justify-center items-center text-5xl"
                  >
                    {selectedTab ? selectedTab.description : "😋"}
                  </motion.div>
                </AnimatePresence>
              </main>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
   
};

export default Calculator;
