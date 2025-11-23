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
    "My main focus is creating modern, responsive Frontend applications with ReactJS — but I also enjoy developing scalable APIs with NestJS.";

  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.9", "start 0.25"],
  });

  const words = paragraph.split(" ");

  return (
    <motion.section className="flex flex-col justify-center bg-white w-full px-4 py-20 min-h-screen">
      <div className="max-w-6xl mx-auto relative">
        {/* <p className="text-[70rem] absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-0">
          10
        </p> */}
        <p
          ref={container}
          className="mt-4 text-slate-700 text-7xl leading-20 text-center flex flex-wrap relative z-10"
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

        <div className="w-full mt-20 pe-48 flex justify-end">
          <div className="max-w-2xl grid-cols-2 grid gap-10">
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
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
