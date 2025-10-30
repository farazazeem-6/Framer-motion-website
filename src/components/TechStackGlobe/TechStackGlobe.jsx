import { IconCloud } from "../ui/icon-cloud";
import styles from "./TechStackGlobe.module.css";

function TechStackGlobe() {
  //Simple Icons CDN URLs directly
  const images = [
    "https://cdn.simpleicons.org/react",
    "https://cdn.simpleicons.org/typescript",
    "https://cdn.simpleicons.org/javascript",
    "https://cdn.simpleicons.org/nodedotjs",
    "https://cdn.simpleicons.org/express",
    "https://cdn.simpleicons.org/mongodb",
    "https://cdn.simpleicons.org/html5",
    "https://cdn.simpleicons.org/css3",
    "https://cdn.simpleicons.org/sass",
    "https://cdn.simpleicons.org/tailwindcss",
    "https://cdn.simpleicons.org/figma",
    "https://cdn.simpleicons.org/git",
    "https://cdn.simpleicons.org/github",
    "https://cdn.simpleicons.org/visualstudiocode",
    "https://cdn.simpleicons.org/redux",
    "https://cdn.simpleicons.org/npm",
    "https://cdn.simpleicons.org/postman",
  ];

  return (
    <div className={styles.globeContainer}>
      <IconCloud images={images} />
    </div>
  );
}

export default TechStackGlobe;
