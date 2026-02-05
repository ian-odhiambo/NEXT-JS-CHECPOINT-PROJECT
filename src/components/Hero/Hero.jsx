import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Ian Odhiambo</h1>
        <p className={styles.description}>
          Fresh from an intensive Software Development Bootcamp, I'm equipped and excited to start my career as a developer. My training provided hands-on mastery of the MERN stack, with practical project experience in full-stack development, REST APIs, and responsive design.
        </p>
        <a href="odhiamboian096@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
