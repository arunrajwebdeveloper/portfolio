import { ParallaxImage } from "./ParallaxImage";
import { motion } from "framer-motion";

const items = [
  {
    src: "./projects/matrimony-screenshot-1.png",
    title: "Matrimony App",
    text: "A matrimony app with Nextjs and NestJs.",
    bg: "#838beb",
  },
  {
    src: "./projects/matrimony-screenshot-2.png",
    title: "Photography portfolio",
    text: "Elegant visuals that blend minimalism and storytelling using html5, css3, javascript and GSAP.",
    bg: "#ffee72",
  },
  {
    src: "./projects/matrimony-screenshot-3.png",
    title: "Notes Application",
    text: "Notes application using ReactJS and NestJS.",
    bg: "#aeefb3",
  },
  {
    src: "./projects/matrimony-screenshot-4.png",
    title: "Coming soon",
    text: "Next project will add soon.",
    bg: "#b5d181",
  },
];

function RecentWorks() {
  return (
    <section className="flex flex-col justify-center bg-white w-full py-28 min-h-screen">
      <div className="relative">
        <h2 className="text-xl md:text-2xl text-center relative z-10">
          Recent Works
        </h2>
        <div className="absolute font-sans font-semibold text-gray-100 left-1/2 -translate-x-1/2 top-0 -translate-y-48 text-[16rem] tracking-tight flex justify-center items-center">
          w.
        </div>
        <div className="relative mt-20 md:mt-32 lg:flex lg:flex-wrap">
          {items.map((item, index, arr) => {
            const isNotLastItem = arr.length - 1 !== index;

            return (
              <div
                key={index}
                style={{ backgroundColor: item.bg }}
                className="w-full lg:w-1/2 overflow-hidden min-h-[500px] md:min-h-[600px] flex flex-col items-center justify-between pt-20 px-6 md:px-10 lg:20"
              >
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  viewport={{ once: false, amount: 0.4 }}
                  className="text-center max-w-md mx-auto"
                >
                  <h3 className="text-2xl md:text-3xl lg:text-4xl text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                  {isNotLastItem && (
                    <div className="flex gap-2 items-center justify-center mt-4">
                      <a
                        className="text-white outline-0 text-sm px-4 py-1 border border-white rounded-4xl"
                        href="."
                        target="_blank"
                        onClick={(e) => {
                          e.preventDefault();
                          alert("On progress...");
                        }}
                      >
                        Demo
                      </a>
                      <a
                        className="text-white outline-0 text-sm px-4 py-1 border border-white rounded-4xl"
                        href="."
                        target="_blank"
                        onClick={(e) => {
                          e.preventDefault();
                          alert("On progress...");
                        }}
                      >
                        Source
                      </a>
                    </div>
                  )}
                </motion.div>
                <ParallaxImage src={item.src} speed={40} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RecentWorks;
