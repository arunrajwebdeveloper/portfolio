import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

interface ComponentProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({ children, progress, range }: ComponentProps) => {
  const amount = range[1] - range[0];

  const step = amount / children.length;

  return (
    <span
      style={{
        position: "relative",
        marginRight: "12px",
        marginTop: "12px",
      }}
    >
      {children.split("").map((char: string, i) => {
        const start = range[0] + i * step;

        const end = range[0] + (i + 1) * step;

        return (
          <Char key={`c_${i}`} progress={progress} range={[start, end]}>
            {char}
          </Char>
        );
      })}
    </span>
  );
};

const Char = ({ children, progress, range }: ComponentProps) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span>
      <span
        style={{
          position: "absolute",
          opacity: 0.2,
        }}
      >
        {children}
      </span>
      <motion.span style={{ opacity: opacity, color: "#000000" }}>
        {children}
      </motion.span>
    </span>
  );
};

const AboutSection = () => {
  const paragraph =
    "I’m a Software Developer. My main focus is building modern, responsive frontend applications with ReactJS and Next.js — and I also develop scalable backend APIs using Node.js technologies like NestJS and Express.";

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <motion.section className="flex bg-white w-full pt-28 lg:pt-40 ">
      <div className="max-w-4xl mx-auto relative px-4">
        <motion.div
          className="flex items-center justify-center mb-14"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <img
            className="w-16 h-16 md:w-40 md:h-40 flex-none"
            src="./quote-up.svg"
            alt="quote icon"
          />
        </motion.div>
        <p
          ref={container}
          className=" text-slate-700 text-3xl leading-7 md:text-5xl md:leading-11 text-center flex flex-wrap justify-center relative z-10"
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
        </p>

        <div className="w-full mt-24 flex justify-center">
          <motion.div
            className="md:max-w-2xl md:grid-cols-2 md:grid md:gap-10 space-y-4 md:space-y-0"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="space-y-3">
              <p className=" text-black text-base">
                For the last ten years, I've been dedicated to transforming
                complex requirements into intuitive, high-performance digital
                experiences.
              </p>
              <p className=" text-black text-base">
                As a specialized Frontend Software Developer, I have spent over
                five years mastering the React.js ecosystem. I rely on a modern
                and robust stack, including TypeScript, Next.js, Redux Toolkit,
                and Tailwind CSS, and leverage advanced state management tools
                like TanStack Query to deliver seamless, data-rich user
                interfaces.
              </p>
            </div>
            <div className="space-y-3">
              <p className=" text-black text-base">
                My expertise goes beyond writing clean code—it's in engineering
                scalable solutions that enhance the overall user journey,
                collaborating effectively with backend teams, and implementing
                UI/UX best practices that bring measurable improvements to
                product quality and engagement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
