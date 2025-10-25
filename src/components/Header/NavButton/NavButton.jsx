import React from "react";
import styles from "../../Header/NavButton/NavButton.module.css";
import { NavLink } from "react-router-dom";

function NavButton() {
  return (
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
  );
}

export default NavButton;
