import { cn } from "../../lib/utils";
import { Marquee } from "../../components/ui/marquee";
import styles from "../ReviewCard/ReviewCard.module.css";
import starImg from "../../../public/star.png";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Very fast developer! compeleted full webpage only in two days including all the responsive and animation work",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "Very fast developer! compeleted full webpage only in two days including all the responsive and animation work",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "Very fast developer! compeleted full webpage only in two days including all the responsive and animation work",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "Very fast developer! compeleted full webpage only in two days including all the responsive and animation work",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "Very fast developer! compeleted full webpage only in two days including all the responsive and animation work",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Very fast developer! compeleted full webpage only in two days including all the responsive and animation work",
    img: "https://avatar.vercel.sh/james",
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
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  );
}
