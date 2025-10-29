import React from "react";
import styles from "../SkillCard/SkillCard.module.css";

function SkillCard({imgSrc,text}) {
  return (
    <div className={styles.SkillCardContainer}>
      
        <div className={styles.skillIcon}>
          <img src={imgSrc} alt='' />
        </div>
        <div className={styles.skillName}>
          <p>{text}</p></div>
      </div>
  );
}

export default SkillCard;
