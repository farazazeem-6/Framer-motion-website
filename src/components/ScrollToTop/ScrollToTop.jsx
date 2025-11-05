import React, { useState, useEffect } from "react";
import styles from "../ScrollToTop/ScrollToTop.module.css";
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled up to 100vh
  const toggleVisibility = () => {
    if (window.scrollY > window.innerHeight) {
      // window.innerHeight = 100vh
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Cleanup function
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
