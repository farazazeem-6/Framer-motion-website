import React from "react";
import styles from "../About/About.module.css";
import TechStackGlobe from "../TechStackGlobe/TechStackGlobe";
import TextRevealComp from "../TextReveal/TextReveal";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";

const Root = styled("div")(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  color: (theme.vars || theme).palette.text.secondary,
  "& > :not(style) ~ :not(style)": {
    marginTop: theme.spacing(2),
  },
}));

function About() {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.aboutHeading}>
        <Root>
          <Divider
            sx={{
              color: "#bfc4ca",
              borderColor: "#555",
              "&::before, &::after": { borderColor: "#333" },
              fontSize: "14px",
              fontWeight: 500,
            }}
          >
            <p
              style={{
                border: "1px solid #333",
                padding: "8px 20px",
                borderRadius: "20px",
                backgroundColor: "rgb(29,34,50)",
              }}
            >
              About My Journey
            </p>
          </Divider>
        </Root>
      </div>

      <div className={styles.aboutData}>
        <div className={styles.globe}>
          <TechStackGlobe />
        </div>
        <div className={styles.aboutText}>
          <TextRevealComp />
        </div>
      </div>
    </div>
  );
}

export default About;
