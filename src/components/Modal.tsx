import { motion, AnimatePresence, type Variants } from "framer-motion";

const badSuspension: Variants = {
  hidden: {
    y: "100px",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: "100px",
    opacity: 0,
  },
};

const Modal = ({
  handleClose,
  isOpen,
}: {
  isOpen: boolean;
  handleClose: () => void;
}) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          onClick={handleClose}
          className="w-screen h-screen fixed bg-black/50 inset-0 z-40 flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="mb-4 bg-white h-60 w-72 rounded-md shadow-lg flex flex-col items-center justify-center"
            variants={badSuspension}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <p>Hello world</p>
            <button
              className="mt-4 px-4 py-2 bg-black text-white rounded"
              onClick={handleClose}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
