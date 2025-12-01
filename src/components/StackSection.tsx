import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { stackList } from "../assets/stack";
import StackItem from "./StackItem";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    // This is the key: staggerChildren will apply a delay between children
    transition: {
      staggerChildren: 0.1, // Delay between each icon animation
      when: "beforeChildren", // Start the container animation before the children
    },
  },
};

const StackSection = () => {
  const ref = useRef(null);
  // Detect when the element is in view. The once: true ensures it only triggers once.
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // amount: 0.5 means 50% must be visible

  // We use useAnimation for more complex, imperative controls, though the variant approach is sufficient here.
  // const controls = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     // controls.start("visible");
  //   }
  // }, [isInView, controls]);

  return (
    <div className="w-full bg-white">
      <section className="flex justify-center items-center max-w-6xl mx-auto px-4 py-6 lg:py-28">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-wrap"
        >
          {stackList.map((stack) => (
            <StackItem key={stack.title} stack={stack} />
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default StackSection;
