import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "../SkillCard/SkillCard.module.css";
import { Progress } from "../lightswind/progress";
import { Typography } from "@mui/material";

function SkillCard({ imgSrc, text, index = 0, progress }) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      className={styles.SkillCardWrapper}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className={styles.SkillCardContainer}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT SIDE */}
        <div className={styles.cardFront}>
          <div className={styles.skillIcon}>
            <img src={imgSrc} alt={text} />
          </div>
          <div className={styles.skillName}>
            <p>{text}</p>
          </div>
        </div>

        {/* BACK SIDE  */}
        <div className={styles.cardBack}>
          <div className={styles.backHeader}>
            <div className={styles.backImg}>
              <img src={imgSrc} alt={text} />
            </div>
            <h3 className={styles.backTitle}>{text}</h3>
          </div>

          <div className={styles.backBody}>
            <div className={styles.experienceLevel}>
              <span className={styles.levelDot}></span>
              <p>Expert Level</p>
            </div>
            <div className={styles.progress}>
              <Progress value={progress} color="success" />
              <Typography
                sx={{ fontWeight: 800 }}
                className={styles.progressVal}
              >
                {progress}%
              </Typography>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default SkillCard;
