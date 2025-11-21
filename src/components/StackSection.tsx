import { useRef } from "react";
import { motion, useInView, type Variants } from "framer-motion";
import { stackList } from "../assets/stack";
import StackItem from "./StackItem";
import Section from "./Section";

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
      <Section className="flex justify-center items-center">
        <motion.div
          ref={ref}
          // Set the initial state to 'hidden' and the animate state based on isInView
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-wrap"
        >
          {stackList.map((stack) => (
            <StackItem key={stack.title} stack={stack} />
          ))}
        </motion.div>
      </Section>
    </div>
  );
};

export default StackSection;
