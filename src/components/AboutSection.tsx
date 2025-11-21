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
      <motion.span style={{ opacity: opacity, color: "#18a163" }}>
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
    <motion.section className="flex flex-col justify-center bg-slate-50 w-full px-4 py-28 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <p
          ref={container}
          className="mt-4 text-slate-700 text-7xl leading-20 text-center flex flex-wrap"
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

        <p className="mt-16 text-slate-700 text-xl max-w-xl">
          Software Developer with 10+ years of experience in building
          responsive, high-performance web applications, and 5+ years of
          expertise in React.js. Skilled in JavaScript, TypeScript, Next.js,
          Redux Toolkit, Tailwind CSS and modern libraries including TanStack
          Query. Experienced in collaborating with backend teams, delivering
          scalable solutions, and implementing UI/UX best practices to enhance
          user engagement and overall product quality.
        </p>
      </div>
    </motion.section>
  );
};

export default AboutSection;
