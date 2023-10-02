import styles from "@/styles";
import { motion } from "framer-motion";

const BenefitItemSolution = ({  description, icon, title }) => (
  <motion.div
    className={`flex items-center flex-col gap-4 shadown-card w-full p-7 text-center rounded-lg`}
    whileHover={{
      scale: 1.04,
      boxShadow: `1px 6px 22px 7px var(--primary-purple)`
    }}
  >
    <p className="text-5xl bg-black-market rounded-full p-5 text-white">{icon}</p>
    <h4 className="text-2xl">{title}</h4>
    <p>{description}</p>
  </motion.div>
);


export default BenefitItemSolution;
