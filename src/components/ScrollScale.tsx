import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

function ScrollScale({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.9], [0.5, 1]); // Map scroll progress (0 → 1) to scale (0.5 → 1)

  return (
    <motion.div ref={ref} style={{ scale }}>
      {children}
    </motion.div>
  );
}

export default ScrollScale;
