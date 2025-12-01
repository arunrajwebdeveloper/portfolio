"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt?: string;
  speed?: number;
}

export const ParallaxImage = ({
  src,
  alt = "",
  speed = 30,
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);

  // Track scroll progress for this element only
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // when it enters and leaves viewport
  });

  // Map scroll progress to vertical movement
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [`-${speed}px`, `${speed}px`]
  );

  // REMOVE
  console.log("y :>> ", y);
  console.clear();

  return (
    <motion.div
      ref={ref}
      className="relative w-full max-w-2xl h-auto z-20"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
      viewport={{ once: false, amount: 0.4 }}
    >
      <motion.img
        src={src}
        alt={alt}
        // style={{ y }}
        loading="lazy"
        className="w-full h-full object-cover md:object-contain will-change-transform relative z-3 shadow-2xl"
      />
    </motion.div>
  );
};
