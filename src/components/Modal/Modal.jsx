import React, { useEffect } from "react";
import styles from "../Modal/Modal.module.css";
import { Box } from "@mui/material";

export default function Modal({ setIsModalOpen, isOpen }) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
    }

    return () => {
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);
  return (
    <Box className={styles.modalOverlay}>
      <Box className={styles.modalData}>
        <button
          onClick={() => setIsModalOpen(false)}
          className={styles.crossBtn}
        >
          <i class="fa-solid fa-xmark"></i>
        </button>
        <Box className={styles.header}>
          <Box className={styles.profileInner}>
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580"
              alt=""
            />
          </Box>
          <h1 className={styles.name}>Muhammad Faraz</h1>
          <a target="_blank" href="" className={styles.website}>
            https://framer-motion-website-pi.vercel.app/
          </a>
        </Box>
        <Box className={styles.detailsContainer}>
          <Box className={styles.section}>
            <h2 className={styles.sectionTitle}>Personal details</h2>
            <Box className={styles.fieldList}>
              <Box className={styles.field}>
                <span className={styles.label}>Full name</span>
                <span className={styles.value}>Muhammad Faraz Azeem</span>
              </Box>
              <Box className={styles.field}>
                <span className={styles.label}>Date of Birth</span>
                <span className={styles.value}>December 12, 2003</span>
              </Box>
              <Box className={styles.field}>
                <span className={styles.label}>Gender</span>
                <span className={styles.value}>Male</span>
              </Box>
              <Box className={styles.field}>
                <span className={styles.label}>Nationality</span>
                <span className={styles.value}>Pakistan</span>
              </Box>
              <Box className={styles.field}>
                <span className={styles.label}>Country</span>
                <span className={styles.value}>🇵🇰 Lahore, Pakistan</span>
              </Box>
              <Box className={styles.field}>
                <span className={styles.label}>Phone Number</span>
                <span className={styles.value}>(+92) 309 8495 478</span>
              </Box>
              <Box className={styles.field}>
                <span className={styles.label}>Email</span>
                <span className={styles.value}>farazazeem66@gmail.com</span>
              </Box>
            </Box>
          </Box>

          {/* second div  */}
          <Box className={styles.section}>
            <h2 className={styles.sectionTitle}>Study Details</h2>
            <Box className={styles.fieldList}>
              <Box className={styles.field}>
                <span className={styles.label}>School</span>
                <span className={styles.value}>
                  Ittehad Public High School Faisalabad
                </span>
              </Box>
              <Box className={styles.field}>
                <span className={styles.label}>College</span>
                <span className={styles.value}>Kips College Faisalabad</span>
              </Box>
              <Box className={styles.field}>
                <span className={styles.label}>University</span>
                <span className={styles.value}>GCUF Faisalabad</span>
              </Box>
              <Box className={styles.field}>
                <span className={styles.label}>Degree</span>
                <span className={styles.value}>BS Computer Science</span>
              </Box>
              <Box className={styles.field}>
                <span className={styles.label}>Year</span>
                <span className={styles.value}>2022-2026</span>
              </Box>
              <Box className={styles.field}>
                <span className={styles.label}>Internship</span>
                <span className={styles.value}>TacticMinds Lahore</span>
              </Box>
              <Box className={styles.field}>
                <span className={styles.label}>Languages</span>
                <span className={styles.value}>
                  HTML,CSS,JS,C++,PYTHON,REACT JS
                </span>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
