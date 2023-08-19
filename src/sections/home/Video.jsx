import { TypingText } from "@/components/CustomTexts";
import styles from "@/styles";
import React from "react";

const Video = () => {
  return (
    <section className={`${styles.paddings} flex flex-col gap-5 text-center mx-auto`}>
      <TypingText element="h3" title="Ebloqs te explica" />

      <h2>¿Qué es la tecnología <span className="gradient-text text-inherit">Blockchain</span></h2>
      <section className="w-full mx-auto">
        <iframe
        className="mx-auto w-full md:w-4/5 h-[200px] md:h-[600px]"
          src="https://www.youtube.com/embed/Wc5x-Xf9RbI"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </section>
    </section>
  );
};

export default Video;
