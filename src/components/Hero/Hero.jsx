import { useEffect, useState } from "react";
import styles from "../../components/Hero/Hero.module.css";
import { cn } from "../../lib/utils";
import Header from "../Header/Header";
import { motion, AnimatePresence } from "framer-motion";

const TEXTS = [
  "Frontend Developer",
  "Backend Developer",
  "Android Developer",
  "IOS Developer",
];

function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % TEXTS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

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
      <div className={`relative z-10 ${styles.heroInnerContainer}`}>
        <div className={styles.heroTextCont}>
          <h1>
            M<span className={styles.dot}>.</span> Faraz
          </h1>
          <h3>
            I'm
            <AnimatePresence mode="wait">
              <motion.span
                className={styles.motionText}
                key={TEXTS[index]}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -50, opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {TEXTS[index]}
              </motion.span>
            </AnimatePresence>
          </h3>
          <p className={styles.roleText}>
            🚀 Full Stack Engineer with{" "}
            <span style={{ fontWeight: 700, marginRight: "5px" }}>
              1 year of learning and 2 years of freelancing
            </span>
            experience.
          </p>
          <p className={styles.studyInfo}>
            🎓 Enrolled in
            <span style={{ fontWeight: 700, marginLeft: "5px" }}>
              BS Computer Science (2022-2026)
            </span>
            at GCUF University, Faisalabad.
          </p>
          <p>💻 Experienced in</p>
          <p style={{ fontWeight: 700 }} className={styles.skillsText}>
            MERN Stack, TypeScript, React, Redux Toolkit, GSAP, Tailwind CSS,
            BootStrap, React Hook Form, and Framer Motion.
          </p>
          <button className={styles.resumeBtn} role="button">
            Explore Resume
          </button>
        </div>
        <div className={styles.heroImgCont}>
          <img
            src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580"
            alt=""
          />
          <div className={`${styles.label} ${styles.label1}`}>
            <div className={`${styles.labelIcon} ${styles.iconPurple}`}>
              <i className="fa-solid fa-computer"></i>
            </div>
            <span>Frontend Developer</span>
          </div>

          <div className={`${styles.label} ${styles.label2}`}>
            <div className={`${styles.labelIcon} ${styles.iconGreen}`}>
              <i className="ri-server-line"></i>
            </div>
            <span>Backend Developer</span>
          </div>

          <div className={`${styles.label} ${styles.label3}`}>
            <div className={`${styles.labelIcon} ${styles.iconCyan}`}>
              <i className="ri-smartphone-line"></i>
            </div>
            <span>Android Developer</span>
          </div>

          <div className={`${styles.label} ${styles.label4}`}>
            <div className={`${styles.labelIcon} ${styles.iconRed}`}>
              <i className="ri-apple-line"></i>
            </div>
            <span>iOS Developer</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
