import { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const LandingSection = () => {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  return (
    <section className="bg-white w-full min-h-screen flex flex-col justify-end">
      <motion.div ref={container} className="space-y-8 max-w-6xl mx-auto py-40">
        {/* font-display */}
        <motion.h1
          style={{ opacity: scrollYProgress }}
          className="text-[#18a163] text-9xl text-left"
        >
          Building modern, responsive web experiences with passion.
        </motion.h1>
        <motion.p
          style={{ opacity: scrollYProgress }}
          className="mt-4 text-slate-700 text-6xl leading-20 text-left"
        >
          I’m <span className="font-sans">Arun Raj</span>, by the way — thanks
          for visiting my portfolio!
        </motion.p>
      </motion.div>
    </section>
  );
};

export default LandingSection;
