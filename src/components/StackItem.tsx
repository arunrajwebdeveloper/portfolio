import Tooltip from "./Tooltip";
import { motion, type Variants } from "framer-motion";

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 }, // Start slightly below and invisible
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", // Use a spring for a bouncy, nice effect
      stiffness: 100,
    },
  },
};

const StackItem = ({
  stack,
}: {
  stack: { title: string; icon: string; alt: string };
}) => {
  return (
    <motion.div
      variants={itemVariants}
      className="group w-1/3 md:w-1/6 lg:w-1/9 relative"
    >
      <Tooltip title={stack.title} />
      <img
        src={stack.icon}
        alt={stack.alt}
        loading="lazy"
        className="align-middle max-w-full p-6 relative z-10 pointer-events-none"
      />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileHover={{
          scale: 1,
          opacity: 1,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 10 }}
        className="absolute inset-0 rounded-full origin-center bg-[#ffd53e] z-0"
      />
    </motion.div>
  );
};

export default StackItem;
