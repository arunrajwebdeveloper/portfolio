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

  return (
    <div
      ref={ref}
      className="relative overflow-hidden w-full h-auto md:h-[400px] lg:h-[800px]"
      // style={{ height }}
    >
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        loading="lazy"
        className="w-full h-full object-cover md:object-contain will-change-transform"
      />
    </div>
  );
};
