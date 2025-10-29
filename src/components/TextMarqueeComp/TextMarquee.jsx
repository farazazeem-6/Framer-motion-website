import Marquee from "react-fast-marquee";
import { useState, useEffect } from "react";
import styles from "../../components/TextMarqueeComp/TextMarquee.module.css";

function ScrollDirectionMarquee() {
  const [direction, setDirection] = useState("left");
  const [lastScroll, setLastScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll) {
        setDirection("left"); // scrolling down
      } else {
        setDirection("right"); // scrolling up
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <div className={styles.marqueeWrapper}>
      <Marquee direction={direction} speed={100}>
        ANDROID DEVELOPER | IOS DEVELOPER | FRONTEND DEVELOPER |
      </Marquee>
      <Marquee direction={direction === "left" ? "right" : "left"} speed={100}>
        FRONTEND DEVELOPER | IOS DEVELOPER | ANDROID DEVELOPER |
      </Marquee>
    </div>
  );
}

export default ScrollDirectionMarquee;
