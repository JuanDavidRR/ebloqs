import { TypingText } from "@/components/CustomTexts";
import TeamCard from "@/components/TeamCard";
import styles from "@/styles";
import { team } from "@/utils/constants/team";
import React from "react";

const Team = () => {
  return (
    <section className={styles.paddings}>
        <TypingText element="h3" title="| Nosotros" />
        <h2>Conoce nuestro <span className="gradient-text text-inherit">equipo</span> de trabajo</h2>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10">
        {team.map((teamMember) => (
          <TeamCard key={teamMember.id} {...teamMember} />
        ))}
      </section>
    </section>
  );
};

export default Team;
