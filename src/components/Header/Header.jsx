import styles from "../../components/Header/Header.module.css";
import NavButton from "./NavButton/NavButton";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import ThemeButton from "./ThemeButton/ThemeButton";
import MenuIcon from "@mui/icons-material/Menu";

function Header() {
  return (
    <div className={styles.Header}>
        <div>
          <HeaderLogo />
        </div>
        <div>
          <NavButton />
        </div>
        <div>
          <ThemeButton />
        </div>
      </div>

  );
}

export default Header;
