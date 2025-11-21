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
    <motion.div variants={itemVariants} className="group w-1/9 p-6 relative">
      <Tooltip title={stack.title} />
      <img
        src={stack.icon}
        alt={stack.alt}
        className="align-middle max-w-full"
      />
    </motion.div>
  );
};

export default StackItem;
