import React, { useState } from "react";
import styles from "../../Header/ThemeButton/ThemeButton.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../../features/theme/themeSlice";

function ThemeButton() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);
  // console.log(theme);
  return (
    <div onClick={() => dispatch(toggleTheme())} className={styles.toggleBtn}>
      {theme === "light" ? (
        <i className="ri-sun-line"></i>
      ) : (
        <i className="ri-moon-line"></i>
      )}
    </div>
  );
}

export default ThemeButton;
