import styles from "@/styles";
import { motion } from "framer-motion";
import Image from "next/image";

const BenefitItemSolution = ({  description, icon }: InfoItemSolutionProps) => (
  <motion.div
    className={`flex items-center flex-col gap-4 shadown-card w-full h-72 py-5 px-5 rounded-lg`}
    whileHover={{
      scale: 1.1,
      boxShadow: `1px 6px 22px 7px var(--primary-purple)`
    }}
  >
    <Image
      src={icon}
      alt="icon"
      width={50}
      height={50}
      className="bg-primary-purple rounded-full p-2 bg-opacity-5"
    />
    <p className="text-sm">{description}</p>
  </motion.div>
);

interface InfoItemSolutionProps {
  icon: string,
  description: string,
}

export default BenefitItemSolution;
