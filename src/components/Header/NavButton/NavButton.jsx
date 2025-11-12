import React from "react";
import styles from "../../Header/NavButton/NavButton.module.css";
import { NavLink, useLocation } from "react-router-dom";
import { Box } from "@mui/material";

function NavButton() {
    const location = useLocation();

  const handleHomeClick = (e) => {
    if (location.pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <Box className={styles.navButtons}>
      <ul>
        <NavLink
        to={'/'}
          onClick={handleHomeClick}
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
    </Box>
  );
}
export default NavButton;
