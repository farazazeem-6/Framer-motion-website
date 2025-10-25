import React ,{useState} from "react";
import styles from "../../Header/ThemeButton/ThemeButton.module.css";

function ThemeButton() {
  const [theme, setTheme] = useState(true);
  return (
    <div className={styles.toggleBtn}>
      {theme ? <i className="ri-moon-line"></i> : <i class="ri-sun-line"></i>}
    </div>
  );
}

export default ThemeButton;
