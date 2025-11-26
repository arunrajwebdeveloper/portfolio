import { useRef } from "react";
import { useInView, motion, type Variants } from "framer-motion";

const LandingSection = () => {
  const body = useRef(null);
  const isInView = useInView(body, {
    once: !true,
    margin: "0px 0px -40% 0px",
  });

  const animation: Variants = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  // const title = [
  //           "Building modern, ",
  //           "responsive web experiences ",
  //           "with passion.",
  //         ]

  // const title = ["Always Learning.", "Always Building."];
  const title = ["Learn.", "Build.", "Repeat."];

  return (
    <section className="bg-white w-full flex justify-start items-center py-28">
      <div ref={body} className="space-y-8 max-w-6xl mx-auto w-full">
        <div>
          {title.map((phrase, index) => {
            return (
              <div key={index} className="overflow-hidden">
                <motion.h1
                  custom={index}
                  variants={animation}
                  initial="initial"
                  animate={isInView ? "enter" : ""}
                  className="text-black text-[12rem] leading-44 text-left m-0"
                >
                  {phrase}
                </motion.h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LandingSection;

// ---------------------------------------------------------------------------------

// import { useEffect, useRef, useState } from "react";
// import { useInView, motion, type Variants } from "framer-motion";

// const LandingSection = () => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { amount: 0.5 });
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     if (isInView) setVisible(true);
//     else if (!isInView && window.scrollY > 100) setVisible(false);
//   }, [isInView]);

//   const animation: Variants = {
//     initial: { y: "100%" },
//     enter: (i) => ({
//       y: "0%",
//       transition: {
//         duration: 0.75,
//         ease: [0.33, 1, 0.68, 1],
//         delay: 0.075 * i,
//       },
//     }),
//     exit: (i) => ({
//       y: "100%",
//       transition: { duration: 0.5, ease: "easeInOut", delay: 0.1 * i },
//     }),
//   };

//   return (
//     <section className="bg-white w-full min-h-screen flex flex-col justify-end">
//       <div ref={ref} className="space-y-8 max-w-6xl mx-auto">
//         {[
//           "Building modern, ",
//           "responsive web experiences ",
//           "with passion.",
//         ].map((phrase, index) => (
//           <div key={index} className="overflow-hidden">
//             <motion.h1
//               custom={index}
//               variants={animation}
//               initial="initial"
//               animate={visible ? "enter" : "exit"}
//               className="text-black text-9xl text-left m-0"
//             >
//               {phrase}
//             </motion.h1>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// import { useRef } from "react";
// import { motion, useScroll } from "framer-motion";

// const LandingSection = () => {
//   const container = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start 0.9", "start 0.25"],
//   });

//   return (
//     <section className="bg-white w-full min-h-screen flex flex-col justify-end">
//       <motion.div ref={container} className="space-y-8 max-w-6xl mx-auto py-40">
//         {/* font-display */}
//         <motion.h1
//           style={{ opacity: scrollYProgress }}
//           className="text-black text-9xl text-left"
//         >
//           Building modern, responsive web experiences with passion.
//         </motion.h1>
//         {/* <motion.p
//           style={{ opacity: scrollYProgress }}
//           className="mt-4 text-slate-700 text-6xl leading-20 text-left"
//         >
//           I’m <span className="font-sans">Arun Raj</span>, by the way — thanks
//           for visiting my portfolio!
//         </motion.p> */}
//       </motion.div>
//     </section>
//   );
// };

// export default LandingSection;
