import { motion, useInView, type Variants } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router";

const images = [
  "./photos/gallery-1.JPG",
  "./photos/gallery-2.JPG",
  "./photos/gallery-3.JPG",
  "./photos/gallery-4.jpg",
  "./photos/gallery-5.JPG",
  "./photos/gallery-6.jpg",
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
      className={`shrink-0 w-1/3 p-2 md:w-1/6 aspect-square flex items-center justify-center`}
    >
      <img
        src={src}
        alt={`Image ${i + 1}`}
        loading="lazy"
        className="w-full h-full object-cover rounded-md"
      />
    </motion.div>
  );
};

function HobbySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section className="relative lg:min-h-screen w-full py-16 lg:py-48 flex justify-between items-center bg-white">
      <div className="max-w-6xl mx-auto flex flex-col gap-20 md:gap-32 px-4">
        {/* <h2 className="text-2xl text-center">Macro shots</h2> */}
        <div className="flex flex-col gap-10">
          <div className="md:w-3/4">
            <motion.p
              className="text-5xl display-text font-black md:text-6xl lg:text-8xl m-0 text-black"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true, amount: 0.4 }}
            >
              Macro photography fuels my curiosity for detail and design.
            </motion.p>
          </div>
          <div className="md:ms-[50%] lg:mt-8">
            <motion.p
              className="text-base text-black md:max-w-64"
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
              className="mt-10 lg:mt-16"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <a
                  href="https://www.instagram.com/ar_macros"
                  target="_blank"
                  className="text-black group rounded-4xl border-2 border-black hover:text-[#ffd53e] px-6 py-4 max-w-48 flex gap-x-2 items-center tracking-wider outline-0 hover:border-[#ffd53e] transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 20 20"
                    className="flex-none"
                  >
                    <path
                      d="M5.87.123C4.242.196 2.831.594 1.691 1.729.548 2.869.155 4.286.082 5.897.036 6.902-.232 14.498.544 16.49a5.04 5.04 0 0 0 2.91 2.902c.633.246 1.355.413 2.415.462 8.861.401 12.145.183 13.531-3.364.246-.631.415-1.353.462-2.41.405-8.884-.066-10.809-1.61-12.352C17.027.507 15.586-.325 5.87.123m.082 17.945c-.97-.044-1.497-.205-1.848-.341-.884-.343-1.547-1.004-1.889-1.883-.591-1.514-.395-8.703-.342-9.866.052-1.139.283-2.181 1.087-2.985C3.954 2 5.24 1.513 13.993 1.908c1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.972 2.628-11.778 2.224M14.09 4.69c0 .657.534 1.191 1.194 1.191s1.195-.534 1.195-1.191-.535-1.191-1.195-1.191-1.194.534-1.194 1.191M4.863 9.988c0 2.815 2.288 5.097 5.11 5.097s5.11-2.282 5.11-5.097-2.288-5.096-5.11-5.096-5.11 2.281-5.11 5.096m1.793 0c0-1.826 1.485-3.308 3.316-3.308s3.316 1.482 3.316 3.308-1.485 3.309-3.316 3.309-3.316-1.482-3.316-3.309"
                      fillRule="evenodd"
                      fill="#000000"
                      className="group-hover:fill-[#ffd53e] fill-[#000000] transition duration-300"
                    />
                  </svg>
                  <span className=" whitespace-nowrap flex-none">
                    instagram
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22px"
                    height="22px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-none"
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
                <Link
                  to="/photography"
                  className="text-black group rounded-4xl border-2 border-black hover:text-[#ffd53e] px-6 py-4 max-w-48 flex gap-x-2 items-center tracking-wider outline-0 hover:border-[#ffd53e] transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="19px"
                    height="19px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-none"
                  >
                    <path
                      d="M22 13.4375C22 17.2087 22 19.0944 20.8284 20.2659C19.6569 21.4375 17.7712 21.4375 14 21.4375H10C6.22876 21.4375 4.34315 21.4375 3.17157 20.2659C2 19.0944 2 17.2087 2 13.4375C2 9.66626 2 7.78065 3.17157 6.60907C4.34315 5.4375 6.22876 5.4375 10 5.4375H14C17.7712 5.4375 19.6569 5.4375 20.8284 6.60907C21.4921 7.27271 21.7798 8.16545 21.9045 9.50024"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="group-hover:stroke-[#ffd53e] stroke-[#000000] transition duration-300"
                    />
                    <path
                      d="M3.98779 6C4.10022 5.06898 4.33494 4.42559 4.82498 3.93726C5.76553 3 7.27932 3 10.3069 3H13.5181C16.5457 3 18.0595 3 19 3.93726C19.4901 4.42559 19.7248 5.06898 19.8372 6"
                      stroke="#000000"
                      strokeWidth="2"
                      className="group-hover:stroke-[#ffd53e] stroke-[#000000] transition duration-300"
                    />
                    <circle
                      cx="17.5"
                      cy="9.9375"
                      r="1.5"
                      stroke="#000000"
                      strokeWidth="2"
                      className="group-hover:stroke-[#ffd53e] stroke-[#000000] transition duration-300"
                    />
                    <path
                      d="M2 13.9376L3.75159 12.405C4.66286 11.6077 6.03628 11.6534 6.89249 12.5096L11.1822 16.7993C11.8694 17.4866 12.9512 17.5803 13.7464 17.0214L14.0446 16.8119C15.1888 16.0077 16.7369 16.1009 17.7765 17.0365L21 19.9376"
                      stroke="#000000"
                      strokeWidth="2"
                      strokeLinecap="round"
                      className="group-hover:stroke-[#ffd53e] stroke-[#000000] transition duration-300"
                    />
                  </svg>
                  <span className=" whitespace-nowrap flex-none">
                    View gallery
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22px"
                    height="22px"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="flex-none"
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
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-wrap md:flex-nowrap"
        >
          {images.map((src, i) => {
            return <ImageItem key={`gallery-thumb-${i}`} src={src} i={i} />;
          })}
        </motion.div>
      </div>
    </section>
  );
}

export default HobbySection;
