import { ParallaxImage } from "./ParallaxImage";
import { motion } from "framer-motion";

const items = [
  {
    src: "./projects/matrimony-screenshot-1.jpg",
    title: "Creative Design",
    text: "Transforming ideas into digital art and interactive experiences.",
  },
  {
    src: "./projects/matrimony-screenshot-2.jpg",
    title: "Modern Aesthetics",
    text: "Elegant visuals that blend minimalism and storytelling.",
  },
  {
    src: "./projects/matrimony-screenshot-3.jpg",
    title: "Seamless Interaction",
    text: "Smooth, performant interfaces that feel alive and intuitive.",
  },
  {
    src: "./projects/matrimony-screenshot-4.jpg",
    title: "Purposeful Visuals",
    text: "Every pixel crafted to convey emotion and clarity.",
  },
  {
    src: "./projects/matrimony-screenshot-5.jpg",
    title: "Demo project",
    text: "Every pixel crafted to convey emotion and clarity.",
  },
];

const ITEM_HEIGHT = "800px";

function RecentWorks() {
  return (
    <section className="flex flex-col justify-center bg-white w-full py-20 min-h-screen">
      <div className="relative">
        <h2 className="text-2xl text-center">Recent Works</h2>
        <div className=" flex flex-col gap-16 relative mt-32">
          <div className="w-px bg-[#D1D1D1] absolute left-1/2 top-0 bottom-0 z-0"></div>
          {items.map((item, index) => {
            const isRight = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`relative flex w-full ${
                  index === 0 ? "mt-0" : "-mt-[400px]"
                } ${isRight ? "justify-start" : "justify-end"}`}
                style={{ height: ITEM_HEIGHT }}
              >
                {index === 0 && (
                  <div className="absolute left-0 text-[16rem] tracking-tight w-[calc(50%-100px)] flex justify-center items-center">
                    W.
                  </div>
                )}

                <div className="w-[calc(50%-100px)] relative">
                  <ParallaxImage
                    src={item.src}
                    speed={40}
                    height={ITEM_HEIGHT}
                  />

                  <motion.div
                    // initial={{ opacity: 0, y: 100 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                    // viewport={{ once: false, amount: 0.4 }}
                    className={`absolute top-1/2 -translate-y-1/2 w-[360px] ${
                      isRight
                        ? "right-0 translate-x-1/4 text-right"
                        : "left-0 -translate-x-1/4 text-left"
                    }`}
                  >
                    <h3 className="text-3xl text-black mb-2">{item.title}</h3>
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
