import { motion, useScroll } from "framer-motion"; // Change this if using motion/react
import { cn } from "../../lib/utils";

export function ScrollProgress({ className, ...props }) {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-[9999] h-1 origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
        className
      )}
      style={{
        scaleX: scrollYProgress,
      }}
      {...props}
    />
  );
}
