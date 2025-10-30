import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

import styles from "../../components/Skills/Skill.module.css";
import SkillCard from "../SkillCard/SkillCard";
import ReactImg from "../../utils/images/react.png";
import typeScriptImg from "../../utils/images/typescript.png";
import tailwindImg from "../../utils/images/tailwindcss.png";
import shadcnImg from "../../utils/images/shadcn.png";
import nodeImg from "../../utils/images/nodejs.png";
import expressImg from "../../utils/images/circled.png";
import figmaImg from "../../utils/images/figma.png";
import framerImg from "../../utils/images/framer.png";
import sassImg from "../../utils/images/sass.png";
import hookFormImg from "../../utils/images/form.png";
import reduxImg from "../../utils/images/redux.png";
import databaseImg from "../../utils/images/database.png";
import boxesImg from "../../utils/images/boxes.png";
import postamnImg from "../../utils/images/postman-.png";
import contextApiImg from "../../utils/images/modelcontext.png";
import About from "../About/About";

const frontEndSkills = {
  [ReactImg]: "React JS",
  [typeScriptImg]: "TypeScript",
  [tailwindImg]: "Tailwind Css",
  [framerImg]: "Framer",
  [sassImg]: "Scss",
  [hookFormImg]: "React Hook Form",
  [boxesImg]: "React Router DOM",
};
const backEndSkills = {
  [nodeImg]: "Node JS",
  [expressImg]: "Express JS",
  [databaseImg]: "Mongo DB",
};
const statekills = {
  [reduxImg]: "RTK",
  [contextApiImg]: "Context API",
};
const tools = {
  [figmaImg]: "Figma",
  [postamnImg]: "Postman",
  [shadcnImg]: "Shadcn UI",
};

// Reusable Animation Wrapper
const RevealOnScroll = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

// Animated Line Component (for ::after effect)
const AnimatedLine = ({ className }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ scaleX: 0 }}
      animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      style={{ transformOrigin: "center" }}
    />
  );
};

function Skill() {
  return (
    <div className={styles.skillOuterContainer}>
      <RevealOnScroll>
        <h1 className={styles.skillHeading}>
          My <span className={styles.gradText}>Skills</span>
        </h1>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <div className={styles.skillText}>
          <p>
            A comprehensive overview of my technical expertise and professional
            capabilities, organized by specialization to showcase the depth and
            breadth of my development skills.
          </p>
          <AnimatedLine className={styles.skillTextLine} />
        </div>
      </RevealOnScroll>

      <div className={styles.skillBoxContainer}>
        {/* Frontend Development */}
        <RevealOnScroll delay={0.1}>
          <div className={styles.skillBoxes}>
            <div style={{ position: "relative" }}>
              <h3 className={styles.frontEnd}>Frontend Development</h3>
              <AnimatedLine className={styles.frontEndLine} />
            </div>
            <div className={styles.boxes}>
              {Object.entries(frontEndSkills).map(([imgSrc, text], index) => (
                <motion.div
                  key={imgSrc}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillCard imgSrc={imgSrc} text={text} />
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Backend Development */}
        <RevealOnScroll delay={0.2}>
          <div className={styles.skillBoxes}>
            <div style={{ position: "relative" }}>
              <h3 className={styles.backend}>Backend Development</h3>
              <AnimatedLine className={styles.backendLine} />
            </div>
            <div className={styles.boxes}>
              {Object.entries(backEndSkills).map(([imgSrc, text], index) => (
                <motion.div
                  key={imgSrc}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillCard imgSrc={imgSrc} text={text} />
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* State Management */}
        <RevealOnScroll delay={0.3}>
          <div className={styles.skillBoxes}>
            <div style={{ position: "relative" }}>
              <h3 className={styles.stateManag}>State Management</h3>
              <AnimatedLine className={styles.stateManagLine} />
            </div>
            <div className={styles.boxes}>
              {Object.entries(statekills).map(([imgSrc, text], index) => (
                <motion.div
                  key={imgSrc}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillCard imgSrc={imgSrc} text={text} />
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>

        {/* Tools & Design */}
        <RevealOnScroll delay={0.4}>
          <div className={styles.skillBoxes}>
            <div style={{ position: "relative" }}>
              <h3 className={styles.toolsManagment}>Tools & Design</h3>
              <AnimatedLine className={styles.toolsManagmentLine} />
            </div>
            <div className={styles.boxes}>
              {Object.entries(tools).map(([imgSrc, text], index) => (
                <motion.div
                  key={imgSrc}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <SkillCard imgSrc={imgSrc} text={text} />
                </motion.div>
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>

      <div className={styles.skillCalcs}>
        <RevealOnScroll delay={0.1}>
          <div className={styles.techCalcs}>
            <p className={styles.numberText}>21</p>
            <p>Technologies</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className={styles.categoryCalcs}>
            <p className={styles.numberText}>5</p>
            <p>Categories</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className={styles.experienceCalcs}>
            <p className={styles.numberText}>3+ Years</p>
            <p>Experience</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className={styles.projectsCalcs}>
            <p className={styles.numberText}>50+</p>
            <p>Projects</p>
          </div>
        </RevealOnScroll>
      </div>

      <About/>
    </div>
  );
}

export default Skill;
