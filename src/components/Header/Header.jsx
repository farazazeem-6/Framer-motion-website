import styles from "../../components/Header/Header.module.css";
import NavButton from "./NavButton/NavButton";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import ThemeButton from "./ThemeButton/ThemeButton";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

function setRealVh() {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
}
window.addEventListener("resize", setRealVh);
window.addEventListener("orientationchange", setRealVh);
setRealVh();

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <>
      <div className={styles.Header}>
        <div>
          <div className={styles.logo}>
            <div className={styles.logoImgCont}>
              <img
                className={styles.logoImg}
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580"
                alt=""
              />
            </div>
            <div className={styles.logoText}>
              <p className={styles.firstName}>Muhammad Faraz </p>
              <p className={styles.infoText}>Front end developer</p>
            </div>
          </div>
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
              <MenuIcon
                fontSize="inherit"
                sx={{
                  fontSize: {
                    xs: "16px", // Small screen
                    sm: "18px",
                    md: "22px", // Medium and up
                  },
                  color: "inherit",
                }}
              />
            </button>
          </div>
        </div>
      </div>

      {/* //mobile screen header  */}
      <div
        className={`${styles.mobileMenu} ${isMenuOpen ? styles.active : ""}`}
      >
        <div>
          <div className={styles.logoSectionCont} style={{}}>
            <div>
              <div className={styles.mobileLogo}>
                <div className={styles.mobileLogoImgCont}>
                  <img
                    className={styles.mobileLogoImg}
                    src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580"
                    alt=""
                  />
                </div>
                <div className={styles.mobileLogoText}>
                  <p className={styles.mobileFirstName}>Muhammad Faraz </p>
                  <p className={styles.mobileInfoText}>Front end developer</p>
                </div>
              </div>
            </div>
            <button onClick={toggleMenu} className={styles.closeMenuBtn}>
              <CloseIcon
                fontSize="inherit"
                sx={{
                  fontSize: {
                    xs: "16px", // Small screen
                    sm: "18px",
                    md: "22px", // Medium and up
                  },
                  color: "inherit",
                }}
              />
            </button>
          </div>

          <hr className={styles.horizontalLine} />
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
          <button className={styles.getInTouchBtn}>
            Get in touch
            <i className="ri-external-link-line"></i>
          </button>
          <div className={styles.socialIcon}>
            <a href="">
              <i className="ri-github-line"></i>
            </a>
            <a href="">
              <i className="ri-linkedin-line"></i>
            </a>
            <a href="">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="">
              <i className="ri-tiktok-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
