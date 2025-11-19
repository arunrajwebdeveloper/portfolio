import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const LandingSection = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <motion.section
      ref={container}
      className="flex flex-col justify-center space-y-8 min-h-screen max-w-6xl mx-auto"
    >
      <motion.h1
        style={{ opacity: scrollYProgress }}
        className="text-black font-display font-semibold text-8xl text-center"
      >
        Building modern, responsive web experiences with passion.
      </motion.h1>
      <motion.p
        style={{ opacity: scrollYProgress }}
        className="mt-4 text-slate-700 text-6xl leading-20 text-center"
      >
        I’m <span className="font-sans">Arun Raj</span>, by the way — thanks for
        visiting my portfolio!
      </motion.p>
    </motion.section>
  );
};

export default LandingSection;
