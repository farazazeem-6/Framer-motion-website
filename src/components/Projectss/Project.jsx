import React from "react";
import styles from "../../components/Projectss/Project.module.css";
import { AnimatedLine, RevealOnScroll } from "../Skills/Skill";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import project1 from "../../../public/project117.png";

function Project() {
  return (
    <div className={styles.projectsOuterContainer}>
      <RevealOnScroll>
        <h1 className={styles.projectHeading}>
          {/* <TouchAppIcon
            fontSize="large"
            sx={{ color: "#9c27b0", fontSize: "60px", marginBottom: "10px" }}
          /> */}
          Featured <span className={styles.gradText}> Projects</span>
        </h1>
      </RevealOnScroll>
      <RevealOnScroll delay={0.2}>
        <div className={styles.projectText}>
          <p>
            Built from scratch—research, problem-solving, and AI assistance. No
            tutorials, just pure innovation and creativity.
          </p>
          <AnimatedLine className={styles.skillTextLine} />
        </div>
      </RevealOnScroll>
      <div className={styles.projectBoxesContainer}>


        <RevealOnScroll>
          <div className={styles.projectBox}>
            <img src={project1} alt="" />
            <div className={styles.projectData}>
              <h1>Movie App with Real API</h1>
              <h4>DESCRIPTION</h4>
              <p>
                React Movie App is a modern web application built with React
                that allows users to search, browse, and discover movies
                effortlessly. It integrates with a public movie API to display
                real-time data such as ratings, release dates, and descriptions.
              </p>
              <h4>TECH STACK</h4>
              <div className={styles.techBox}>
                <p>React JS</p>
                <p>MUI</p>
                <p>API</p>
                <p>CSS</p>
              </div>
              <button className={styles.demoBtn}>Live Demo</button>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className={styles.projectBox}>
            <img src={project1} alt="" />
            <div className={styles.projectData}>
              <h1>Movie App with Real API</h1>
              <h4>DESCRIPTION</h4>
              <p>
                React Movie App is a modern web application built with React
                that allows users to search, browse, and discover movies
                effortlessly. It integrates with a public movie API to display
                real-time data such as ratings, release dates, and descriptions.
              </p>
              <h4>TECH STACK</h4>
              <div className={styles.techBox}>
                <p>React JS</p>
                <p>MUI</p>
                <p>API</p>
                <p>CSS</p>
              </div>
              <button className={styles.demoBtn}>Live Demo</button>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className={styles.projectBox}>
            <img src={project1} alt="" />
            <div className={styles.projectData}>
              <h1>Movie App with Real API</h1>
              <h4>DESCRIPTION</h4>
              <p>
                React Movie App is a modern web application built with React
                that allows users to search, browse, and discover movies
                effortlessly. It integrates with a public movie API to display
                real-time data such as ratings, release dates, and descriptions.
              </p>
              <h4>TECH STACK</h4>
              <div className={styles.techBox}>
                <p>React JS</p>
                <p>MUI</p>
                <p>API</p>
                <p>CSS</p>
              </div>
              <button className={styles.demoBtn}>Live Demo</button>
            </div>
          </div>
        </RevealOnScroll>



      </div>
    </div>
  );
}

export default Project;
