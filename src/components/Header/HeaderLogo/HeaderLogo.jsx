import React from "react";
import styles from "../../Header/HeaderLogo/HeaderLogo.module.css";

function HeaderLogo() {
  return (
    <div className={styles.logo}>
      <div className={styles.logoImgCont}>
        <img
          className={styles.logoImg}
          src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870"
          alt=""
        />
      </div>
      <div className={styles.logoText}>
        <p className={styles.firstName}>Muhammad Faraz </p>
        <p className={styles.infoText}>Front end developer</p>
      </div>
    </div>
  );
}

export default HeaderLogo;
