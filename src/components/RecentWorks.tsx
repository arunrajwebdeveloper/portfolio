import { ParallaxImage } from "./ParallaxImage";
import { motion } from "framer-motion";

const items = [
  {
    src: "https://images.unsplash.com/photo-1527873722743-67759f0854aa?w=1000",
    title: "Creative Design",
    text: "Transforming ideas into digital art and interactive experiences.",
  },
  {
    src: "https://images.unsplash.com/photo-1483519173755-be893fab1f46?w=1000",
    title: "Modern Aesthetics",
    text: "Elegant visuals that blend minimalism and storytelling.",
  },
  {
    src: "https://images.unsplash.com/photo-1705674076072-41db4ff670e8?w=1000",
    title: "Seamless Interaction",
    text: "Smooth, performant interfaces that feel alive and intuitive.",
  },
  {
    src: "https://images.unsplash.com/photo-1591588368590-7b6f50b87663?w=1000",
    title: "Purposeful Visuals",
    text: "Every pixel crafted to convey emotion and clarity.",
  },
];

function RecentWorks() {
  return (
    <section className="flex flex-col justify-center bg-white w-full py-20 min-h-screen">
      <div className="relative">
        <h2 className="text-2xl text-center">Recent Works</h2>
        <div className="grid md:grid-cols-2 gap-x-48 gap-y-24 relative mt-32">
          {items.map((item, index) => {
            const isRight = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`relative flex w-full ${
                  isRight
                    ? "md:col-start-2 mt-32 justify-start"
                    : "md:col-start-1 justify-end"
                }`}
                style={{ height: "500px" }}
              >
                <div className="w-full relative">
                  <ParallaxImage src={item.src} speed={40} height="500px" />
                </div>

                <motion.div
                  initial={{ opacity: 0, x: isRight ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  viewport={{ once: false, amount: 0.4 }}
                  className={`absolute top-1/2 -translate-y-1/2 w-[300px] ${
                    isRight
                      ? " -ml-16 text-left" // push text to outside left of right image
                      : " -mr-16 text-right" // push text to outside right of left image
                  }`}
                >
                  <h3 className="text-3xl text-black mb-2">{item.title}</h3>
                  <p className="text-black leading-relaxed">{item.text}</p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RecentWorks;
