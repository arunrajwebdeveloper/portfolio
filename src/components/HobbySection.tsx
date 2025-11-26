import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1527873722743-67759f0854aa?w=700",
  "https://images.unsplash.com/photo-1591588368590-7b6f50b87663?w=700",
  "https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?w=700",
  "https://images.unsplash.com/photo-1521200052569-1799509456d3?w=700",
];

const itemVariants: Variants = {
  hidden: { y: 40, opacity: 0 }, // Start slightly below and invisible
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", // Use a spring for a bouncy, nice effect
      stiffness: 100,
    },
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    // This is the key: staggerChildren will apply a delay between children
    transition: {
      staggerChildren: 0.2, // Delay between each icon animation
      when: "beforeChildren", // Start the container animation before the children
    },
  },
};

const ImageItem = ({ src, i }: { src: string; i: number }) => {
  return (
    <motion.div
      key={i}
      variants={itemVariants}
      className={`shrink-0 w-1/4 aspect-square flex items-center justify-center`}
    >
      <img
        src={src}
        alt={`Image ${i + 1}`}
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

function HobbySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="relative min-h-screen w-full px-4 py-48 flex justify-between items-center bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-32">
        {/* <h2 className="text-2xl text-center">Macro shots</h2> */}
        <div className="flex gap-10">
          <motion.p
            className="text-6xl m-0 text-black"
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            viewport={{ once: true, amount: 0.4 }}
          >
            Macro photography fuels my curiosity for detail and design.
          </motion.p>
          <div>
            <motion.p
              className="text-base text-black"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true, amount: 0.4 }}
            >
              Every close-up reveals a new perspective — a hidden landscape
              within the ordinary. Through macro photography, I’ve learned to
              see beauty in simplicity and creativity in every tiny form.
            </motion.p>
            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <a
                href="/"
                className="text-black flex gap-2 items-center outline-0 group hover:text-[#ffd53e] transition duration-300"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M5.87.123C4.242.196 2.831.594 1.691 1.729.548 2.869.155 4.286.082 5.897.036 6.902-.232 14.498.544 16.49a5.04 5.04 0 0 0 2.91 2.902c.633.246 1.355.413 2.415.462 8.861.401 12.145.183 13.531-3.364.246-.631.415-1.353.462-2.41.405-8.884-.066-10.809-1.61-12.352C17.027.507 15.586-.325 5.87.123m.082 17.945c-.97-.044-1.497-.205-1.848-.341-.884-.343-1.547-1.004-1.889-1.883-.591-1.514-.395-8.703-.342-9.866.052-1.139.283-2.181 1.087-2.985C3.954 2 5.24 1.513 13.993 1.908c1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.972 2.628-11.778 2.224M14.09 4.69c0 .657.534 1.191 1.194 1.191s1.195-.534 1.195-1.191-.535-1.191-1.195-1.191-1.194.534-1.194 1.191M4.863 9.988c0 2.815 2.288 5.097 5.11 5.097s5.11-2.282 5.11-5.097-2.288-5.096-5.11-5.096-5.11 2.281-5.11 5.096m1.793 0c0-1.826 1.485-3.308 3.316-3.308s3.316 1.482 3.316 3.308-1.485 3.309-3.316 3.309-3.316-1.482-3.316-3.309"
                    fill-rule="evenodd"
                    fill="#000000"
                    className="group-hover:fill-[#ffd53e] fill-[#000000] transition duration-300"
                  />
                </svg>
                <span>instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22px"
                  height="22px"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g id="Arrow / Arrow_Up_Right_SM">
                    <path
                      id="Vector"
                      d="M8 16L16 8M16 8H10M16 8V14"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="group-hover:stroke-[#ffd53e] stroke-[#000000] transition duration-300"
                    />
                  </g>
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex"
        >
          {images.map((src, i) => {
            return <ImageItem src={src} i={i} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default HobbySection;
