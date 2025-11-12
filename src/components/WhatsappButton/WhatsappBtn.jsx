import React, { useState, useEffect } from "react";
import styles from "../WhatsappButton/WhatsappBtn.module.css";

const handleWhatsAppClick = () => {
  window.open("https://wa.me/923098495478", "_blank");
};
const WhatsappBtn = () => {
  return (
    <>
      <button onClick={handleWhatsAppClick} className={styles.scrollToTop}>
        <i className="ri-whatsapp-line"></i>
      </button>
    </>
  );
};

export default WhatsappBtn;
