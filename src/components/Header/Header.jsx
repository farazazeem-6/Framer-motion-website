import styles from "../../components/Header/Header.module.css";
import NavButton from "./NavButton/NavButton";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import ThemeButton from "./ThemeButton/ThemeButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import LaunchIcon from '@mui/icons-material/Launch';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div className={styles.Header}>
        <div>
          <HeaderLogo />
        </div>
        <div className={styles.fullScreenNav}>
          <NavButton />
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          <ThemeButton />
          <div className={styles.hamburger}>
            <button onClick={toggleMenu} className={styles.hamburgerBtn}>
              <MenuIcon fontSize="medium" color="inherit" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <HeaderLogo />
            <button onClick={toggleMenu} className={styles.closeMenuBtn}>
              <CloseIcon fontSize="medium" color="inherit" />
            </button>
          </div>

          <hr style={{ marginTop: "40px", color: "#FFFAF0", opacity: "0.1" }} />
          <div className={styles.mobileMenuNavButtons}>
            <ul>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                <li>Home</li>
              </NavLink>
              <NavLink
                to={"/skills"}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                <li>Skills</li>
              </NavLink>
              <NavLink
                to={"/projects"}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                <li>Projects</li>
              </NavLink>
              <NavLink
                to={"/testimonials"}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                <li>Testimonials</li>
              </NavLink>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive ? styles.activeLink : ""
                }
              >
                <li>Contact</li>
              </NavLink>
            </ul>
          </div>
        </div>

        <div className={styles.sideBarFooter}>
          <button className={styles.getInTouchBtn} >
            Get in touch
            <i class="ri-external-link-line"></i>
          </button>
          <div className={styles.socialIcon}>
            <a href=""><i class="ri-github-line"></i></a>
            <a href=""><i class="ri-linkedin-line"></i></a>
            <a href=""><i class="ri-instagram-line"></i></a>
            <a href=""><i class="ri-tiktok-fill"></i></a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
