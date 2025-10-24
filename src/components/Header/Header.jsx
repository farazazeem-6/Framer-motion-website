import React, { useState } from "react";
import styles from "../../components/Header/Header.module.css";
import { NavLink } from "react-router-dom";


function Header() {
  const [theme, setTheme] = useState(true);

  return (
    <div className={styles.header}>
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
      <div className={styles.navButtons}>
        <ul>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/skills"}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <li>Skills</li>
          </NavLink>
          <NavLink
            to={"/projects"}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <li>Projects</li>
          </NavLink>
          <NavLink
            to={"/testimonials"}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <li>Testimonials</li>
          </NavLink>
          <NavLink
            to={"/contact"}
            className={({ isActive }) => (isActive ? styles.activeLink : "")}
          >
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
      <div className={styles.toggleBtn}>
        {theme ? <i className="ri-moon-line"></i> : <i class="ri-sun-line"></i>}
      </div>
    </div>
  );
}

export default Header;
