import React from "react";
import styles from "../../components/Projectss/Project.module.css";
import { AnimatedLine, RevealOnScroll } from "../Skills/Skill";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import project1 from "../../../public/project119.png";
import project2 from "../../../public/project124.png";
import project3 from "../../../public/project120.png";
import project4 from "../../../public/project126.png";
import project5 from "../../../public/project128.png";
import project6 from "../../../public/project127.png";

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
                <p>MUI</p>
              </div>
              <a
                target="_blank"
                href="https://movie-app-using-react-1hgk.vercel.app/"
              >
                <button className={styles.demoBtn}>Live Demo</button>
              </a>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className={styles.projectBox}>
            <img src={project2} alt="" />
            <div className={styles.projectData}>
              <h1>Baloach Travels Booking Website</h1>
              <h4>DESCRIPTION</h4>
              <p>
                Baloach Travels is a modern and responsive bus booking website
                that allows users to search routes, compare prices, select
                seats, and book tickets easily. Built with HTML, CSS, and
                JavaScript (React/Firebase if you’re using them), it offers a
                smooth multi-step booking process, user authentication, and a
                clean, user-friendly interface for travelers.
              </p>
              <h4>TECH STACK</h4>
              <div className={styles.techBox}>
                <p>JAVASCRIPT</p>
                <p>BOOTSTRAP</p>
                <p>HTML</p>
                <p>CSS</p>
                <p>FIREBASE</p>
              </div>
              <a
                target="_blank"
                href="https://test-website-deployment.vercel.app/"
              >
                <button className={styles.demoBtn}>Live Demo</button>
              </a>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className={styles.projectBox}>
            <img src={project3} alt="" />
            <div className={styles.projectData}>
              <h1>Food Panda with Complete Responsiveness</h1>
              <h4>DESCRIPTION</h4>
              <p>
                Foodpanda Clone is a responsive food delivery web app that
                replicates the core features of Foodpanda. Users can browse
                restaurants, explore menus, add items to the cart, and place
                orders seamlessly. Built with modern web technologies like
                React, HTML, CSS, and JavaScript, it offers a smooth UI, dynamic
                routing, and a real-world online ordering experience.
              </p>
              <h4>TECH STACK</h4>
              <div className={styles.techBox}>
                <p>JS</p>
                <p>HTML:5</p>
                <p>CSS</p>
                <p>BOOTSTRAP</p>
              </div>
              <button className={styles.demoBtn}>Live Demo</button>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className={styles.projectBox}>
            <img src={project4} alt="" />
            <div className={styles.projectData}>
              <h1>Travel Web Application</h1>
              <h4>DESCRIPTION</h4>
              <p>
                Travel Explorer is a responsive travel website built using HTML,
                CSS, and JavaScript. It allows users to explore destinations,
                view travel packages, and learn about tours through an engaging
                and visually appealing interface. The site features smooth
                animations, an organized layout, and a user-friendly design that
                enhances the overall travel browsing experience.
              </p>
              <h4>TECH STACK</h4>
              <div className={styles.techBox}>
                <p>JS</p>
                <p>CSS</p>
                <p>HTML</p>
                <p>BOOTSTRAP</p>
              </div>
              <a
                target="_blank"
                href="https://responsive-travel-tour-website-desi.vercel.app/"
              >
                <button className={styles.demoBtn}>Live Demo</button>
              </a>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className={styles.projectBox}>
            <img src={project5} alt="" />
            <div className={styles.projectData}>
              <h1>Expense Tracker React JS</h1>
              <h4>DESCRIPTION</h4>
              <p>
                Express Tracker is a React-based web application that allows
                users to track their parcels or shipments in real time. It
                features a clean and responsive UI where users can enter
                tracking IDs to view delivery status, location updates, and
                shipment details. Built with React and modern UI components, it
                offers a smooth and efficient package tracking experience.
              </p>
              <h4>TECH STACK</h4>
              <div className={styles.techBox}>
                <p>React JS</p>
                <p>MUI</p>
                <p>JS</p>
                <p>CSS</p>
                <p>HTML</p>
              </div>
              <a
                target="_blank"
                href="https://expense-tracker-app-using-react.vercel.app/"
              >
                <button className={styles.demoBtn}>Live Demo</button>
              </a>
            </div>
          </div>
        </RevealOnScroll>
        <RevealOnScroll>
          <div className={styles.projectBox}>
            <img src={project6} alt="" />
            <div className={styles.projectData}>
              <h1>Bubble Game</h1>
              <h4>DESCRIPTION</h4>
              <p>
                Bubble Game is a fun and interactive web game built using HTML,
                CSS, and JavaScript. Players pop bubbles appearing on the screen
                to score points within a limited time. The game features smooth
                animations, dynamic scoring, and an engaging UI designed for a
                quick and enjoyable gaming experience.
              </p>
              <h4>TECH STACK</h4>
              <div className={styles.techBox}>
                <p>JS</p>
                <p>BOOTSTRAP</p>
                <p>HTML</p>
                <p>CSS</p>
              </div>
              <a
                target="_blank"
                href="https://bubble-game-using-pure-js.vercel.app/"
              >
                <button className={styles.demoBtn}>Live Demo</button>
              </a>
            </div>
          </div>
        </RevealOnScroll>
      </div>
      <div className={styles.gitrepo}>
        <a target="_blank" href="https://github.com/farazazeem-6">
          <p>
            View More Projects on GitHub <i className="ri-arrow-right-up-line"></i>
          </p>
        </a>
      </div>
    </div>
  );
}

export default Project;
