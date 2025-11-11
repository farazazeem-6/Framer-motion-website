import React, { useEffect } from "react";
import styles from "../Modal/Modal.module.css";

export default function Modal({ isOpen, onClose }) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);
  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalData}>
        <button onClick={onClose} className={styles.crossBtn}>
          <i class="fa-solid fa-xmark"></i>
        </button>
        <div className={styles.header}>
          <div className={styles.profileInner}>
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580"
              alt=""
            />
          </div>
          <h1 className={styles.name}>Muhammad Faraz</h1>
          <a target="_blank" href="" className={styles.website}>
            https://framer-motion-website-pi.vercel.app/
          </a>
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Personal details</h2>
            <div className={styles.fieldList}>
              <div className={styles.field}>
                <span className={styles.label}>Full name</span>
                <span className={styles.value}>Muhammad Faraz Azeem</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Date of Birth</span>
                <span className={styles.value}>December 12, 2003</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Gender</span>
                <span className={styles.value}>Male</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Nationality</span>
                <span className={styles.value}>Pakistan</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Country</span>
                <span className={styles.value}>🇵🇰 Lahore, Pakistan</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Phone Number</span>
                <span className={styles.value}>(+92) 309 8495 478</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>farazazeem66@gmail.com</span>
              </div>
            </div>
          </div>

          {/* second div  */}
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>Study Details</h2>
            <div className={styles.fieldList}>
              <div className={styles.field}>
                <span className={styles.label}>School</span>
                <span className={styles.value}>
                  Ittehad Public High School Faisalabad
                </span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>College</span>
                <span className={styles.value}>Kips College Faisalabad</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>University</span>
                <span className={styles.value}>GCUF Faisalabad</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Degree</span>
                <span className={styles.value}>BS Computer Science</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Year</span>
                <span className={styles.value}>2022-2026</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Internship</span>
                <span className={styles.value}>TacticMinds Lahore</span>
              </div>
              <div className={styles.field}>
                <span className={styles.label}>Languages</span>
                <span className={styles.value}>
                  HTML,CSS,JS,C++,PYTHON,REACT JS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
