import { cn } from "../../lib/utils";
import { Marquee } from "../../components/ui/marquee";
import styles from "../ReviewCard/ReviewCard.module.css";
import starImg from "../../../public/star.png";
import { useSelector } from "react-redux";

const reviews = [
  {
    name: "Ayesha Khan",
    username: "@aysha_2",
    body: "I absolutely love how simple and smooth the experience was! Everything worked perfectly, and I got exactly what I needed without any hassle. Highly recommended",
    img: "https://plus.unsplash.com/premium_photo-1690407617686-d449aa2aad3c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  },
  {
    name: "Rohan Mehta",
    username: "@rohenmehta1",
    body: "This platform exceeded my expectations. The design is modern, and the process is super easy to follow. I’ll definitely be coming back again!",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
  },
  {
    name: "Emily Carter",
    username: "@emilacarter",
    body: "Amazing service! The attention to detail and customer support really stood out. It felt like everything was built with the user in mind.",
    img: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580",
  },
  {
    name: "Hamza Qureshi",
    username: "@hmza123",
    body: "I was impressed with how quick and responsive everything was. The overall experience felt premium and effortless. Keep up the great work!",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=464",
  },
  {
    name: "Jessica Brown",
    username: "@jessi",
    body: "Fantastic interface and really intuitive to use. I found what I needed instantly. It’s rare to see something this well put together",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
  },
  {
    name: "James",
    username: "@james",
    body: "This is one of the most reliable services I’ve used recently. Everything works smoothly, and the results are always consistent. Five stars!",
    img: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <div className={styles.reviewCardContainer}>
      <div className={styles.cardHeader}>
        <div className={styles.cardImage}>
          <img src={img} alt="" />
        </div>
        <div className={styles.cardHeaderText}>
          <p className={styles.cardName}>{name}</p>
          <p className={styles.cardUserName}>{username}</p>
        </div>
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.rating}>
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
        </div>
        <div className={styles.cardDetail}>
          <p>{body}</p>
        </div>
      </div>
    </div>
  );
};

export function MarqueeDemo() {
  const theme = useSelector((state) => state.theme.mode);

  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r z-10 ${
          theme === "light"
            ? "from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0.8)] to-transparent"
            : "from-[rgba(30,34,50,1)] via-[rgba(30,34,50,0.8)] to-transparent"
        }`}
      />

      <div
        className={`pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l z-10 ${
          theme === "light"
            ? "from-[rgba(255,255,255,1)] via-[rgba(255,255,255,0.8)] to-transparent"
            : "from-[rgba(30,34,50,1)] via-[rgba(30,34,50,0.8)] to-transparent"
        }`}
      />
    </div>
  );
}
