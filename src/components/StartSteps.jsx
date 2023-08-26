import styles from "@/styles";

const StartSteps = ({ number, content, title, icon }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
    >
      <p className="font-bold text-[20px] text-white">
        {number + 1}
      </p>
    </div>
    <div>
        <h3>{title}</h3>
        <p>{content}</p>
    </div>
  </div>
);

export default StartSteps;
