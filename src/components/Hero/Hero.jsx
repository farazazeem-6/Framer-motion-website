import React from "react";
import styles from "../../components/Hero/Hero.module.css";
import { cn } from "../../lib/utils";
import Header from "../Header/Header";

function Hero() {
  return (
    <div className={`relative h-screen w-full ${styles.heroContainer}`}>
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />

      {/* add the components here... */}
      <div className="relative z-10">
        <div className={styles.heroTextCont}>
          <h1>M.Faraz</h1>
          <h3>I'm Frontend Developer</h3>
        </div>
        <div className={styles.heroImgCont}></div>
      </div>
    </div>
  );
}

export default Hero;
