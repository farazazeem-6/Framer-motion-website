import React, { useRef, useState } from "react";
import styles from "../../components/Testimonials/Testimonials.module.css";
import { AnimatedLine, RevealOnScroll } from "../Skills/Skill";
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
  const scrollToFooterCTA = () => {
    const ctaSection = document.getElementById("contact-cta");
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [result, setResult] = useState("");
  const [color, setColor] = useState("");
  const [showToast, setShowToast] = useState(false);
  const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
  const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_hi1re2n", //  EmailJS Service ID
        "template_4l20rkn", // EmailJS Template ID
        form.current,
        "jnwXsPB_umqpi1SeY" // EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setResult("✅ Message sent successfully!");
          setColor("#e8f5e8");
          setIsSending(false);
          setShowToast(true);

          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setResult("❌ Failed to send message, please try again.");
          setColor("#ffeaea");
          setIsSending(false);

          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 3000);
        }
      );
  };

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
      <div className={styles.testimonialsFooter}>
        <p>Ready to join these satisfied clients?</p>
        <button onClick={scrollToFooterCTA} className={styles.testimonialbtn}>
          Start Your Project Today
        </button>
      </div>
    </div>
  );
}

export default Testimonials;
