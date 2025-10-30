import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import { cn } from "../../lib/utils";

export const TextReveal = ({ children, className }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div
      ref={targetRef}
      className={cn("relative z-0 h-[10vh] w-full", className)}
    >
      <div
        className={
          "sticky top-0 mx-auto flex h-[50%] w-full max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
        }
      >
        <span
          className={
            "flex flex-wrap w-full py-12 px-3 font-bold text-black/20 dark:text-white/20 leading-relaxed gap-x-2 gap-y-2 text-[14px] [@media(min-width:500px)]:py-12 [@media(min-width:500px)]:px-5 sm:text-lg sm:py-5 sm:px-5 md:text-xl md:py-6 md:px-6 lg:text-2xl lg:py-8 lg:px-8 xl:text-3xl xl:py-10 xl:px-10 2xl:text-4xl 2xl:py-12 2xl:px-12"
          }
        >
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-1.5 inline-block break-words">
      <span className="absolute opacity-30">{children}</span>
      <motion.span style={{ opacity }} className="text-black dark:text-white">
        {children}
      </motion.span>
    </span>
  );
};
