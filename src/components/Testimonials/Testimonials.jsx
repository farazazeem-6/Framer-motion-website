import React from "react";
import styles from "../../components/Testimonials/Testimonials.module.css";
import { AnimatedLine, RevealOnScroll } from "../Skills/Skill";
import { Marquee } from "../ui/marquee";
import { MarqueeDemo } from "../ReviewCard/ReviewCard";
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://avatar.vercel.sh/james",
  },
];

function Testimonials() {
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  return (
    <div className={styles.testimonialOuterContainer}>
      <RevealOnScroll>
        <h1 className={styles.testHeading}>
          Client <span className={styles.testText}> Testimonials</span>
        </h1>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2}>
        <div className={styles.testInfo}>
          <p>
            Don't just take my word for it. Here's what my clients have to say
            about working with me and the results we've achieved together.
          </p>
          <AnimatedLine className={styles.testTextLine} />
        </div>
      </RevealOnScroll>

      <div className={styles.skillCalcs}>
        <RevealOnScroll delay={0.1}>
          <div className={styles.techCalcs}>
            <p className={styles.numberText}>15+</p>
            <p>Happy Clients</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className={styles.categoryCalcs}>
            <p className={styles.numberText}>20+</p>
            <p>Projects Completed</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className={styles.experienceCalcs}>
            <p className={styles.numberText}>10+</p>
            <p>Positive Reviews</p>
          </div>
        </RevealOnScroll>
        <RevealOnScroll delay={0.1}>
          <div className={styles.projectsCalcs}>
            <p className={styles.numberText}>3+</p>
            <p>Years Experience</p>
          </div>
        </RevealOnScroll>
      </div>

      {/* Testimonials Marquee */}
      <MarqueeDemo />
    </div>
  );
}

export default Testimonials;
