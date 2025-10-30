import { motion } from "framer-motion";
import { useRef } from "react";

export function TextRevealScroll({ text, className = "" }) {
  const words = text.split(" ");
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className={`min-h-[40vh] flex items-center w-full ${className}`}>
      <div className="flex flex-wrap gap-x-2 gap-y-1 px-3 py-8 w-full max-w-full">
        {words.map((word, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1 }}
            transition={{ 
              duration: 0.5, 
              delay: index * 0.05,
              ease: "easeOut"
            }}
            viewport={{ once: false, amount: 0.8 }}
            className="text-[14px] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-gray-400 inline-block"
          >
            <motion.span
              whileInView={{ color: "#ffffff" }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: false, amount: 0.8 }}
              className="inline-block"
            >
              {word}
            </motion.span>
          </motion.span>
        ))}
      </div>
    </div>
  );
}