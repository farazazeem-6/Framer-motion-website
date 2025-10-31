import React from "react";
import { motion } from "framer-motion";
import styles from "../SkillCard/SkillCard.module.css";

function SkillCard({ imgSrc, text, index = 0 }) {
  return (
    <motion.div
      className={styles.SkillCardContainer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      style={{ width: "100%" }}
    >
      <div className={styles.skillIcon}>
        <img src={imgSrc} alt="" />
      </div>
      <div className={styles.skillName}>
        <p>{text}</p>
      </div>
    </motion.div>
  );
}

export default SkillCard;
