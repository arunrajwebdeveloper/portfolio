import { ParallaxImage } from "./ParallaxImage";
import { motion } from "framer-motion";

const items = [
  {
    src: "./projects/matrimony-screenshot-1.jpg",
    title: "Matrimony App",
    text: "A matrimony app with Nextjs and NestJs.",
  },
  {
    src: "./projects/matrimony-screenshot-2.jpg",
    title: "Photography portfolio",
    text: "Elegant visuals that blend minimalism and storytelling using html5, css3, javascript and GSAP.",
  },
  {
    src: "./projects/matrimony-screenshot-3.jpg",
    title: "Notes Application",
    text: "Notes application using ReactJS and NestJS.",
  },
];

function RecentWorks() {
  return (
    <section className="flex flex-col justify-center bg-white w-full py-20 min-h-screen">
      <div className="relative px-4 md:px-0">
        <h2 className="text-xl md:text-2xl text-center">Recent Works</h2>
        <div className=" md:flex md:flex-col md:gap-16 relative mt-20 md:mt-32">
          <div className="w-px bg-[#D1D1D1] absolute left-1/2 top-0 bottom-0 z-0 hidden md:block"></div>
          {items.map((item, index) => {
            const isRight = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`relative md:flex w-full ${
                  index === 0 ? "mt-0" : "mt-8 md:-mt-[400px]"
                } ${isRight ? "md:justify-start" : "md:justify-end"}`}
                // style={{ height: ITEM_HEIGHT }}
              >
                {index === 0 && (
                  <div className="absolute hidden left-0 text-[16rem] tracking-tight w-[calc(50%-100px)] md:flex md:justify-center md:items-center">
                    W.
                  </div>
                )}

                <div className="w-full md:w-[calc(50%-100px)] relative h-auto md:h-[400px] lg:h-[800px] ">
                  <ParallaxImage src={item.src} speed={40} />
                  <motion.div
                    // initial={{ opacity: 0, y: 100 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    // viewport={{ once: false, amount: 0.4 }}
                    className={`md:absolute md:top-1/2 md:-translate-y-1/2 md:w-[360px] mt-4 ${
                      isRight
                        ? "md:right-0 md:translate-x-1/4 md:text-right"
                        : "md:left-0 md:-translate-x-1/4 md:text-left"
                    }`}
                  >
                    <h3 className="text-xl md:text-3xl text-black mb-2">
                      {item.title}
                    </h3>
                    <p className="text-black leading-relaxed">{item.text}</p>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RecentWorks;
