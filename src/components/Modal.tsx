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
          className="w-screen h-screen fixed bg-black/50 inset-0 z-999 flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="mb-12 md:mb-4 bg-white select-none h-auto w-72 rounded-lg overflow-hidden shadow-lg flex flex-col items-center justify-center"
            variants={badSuspension}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* <button
              className="mt-4 px-4 py-2 bg-black text-white rounded"
              onClick={handleClose}
            >
              Close
            </button> */}

            <div className="h-full w-full pb-20 pt-10">
              <img
                className="select-none pointer-events-none rounded-full mx-auto block w-40 h-40"
                src="./photos/user.jpg"
                alt="arunraj photo"
              />
              <div className="p-6 bg-white relative text-center">
                <p className="text-2xl text-black">Arun Raj R</p>
                <p className="text-lg text-gray-700 mb-0.5">
                  Software Developer
                </p>
                <p className="text-base text-gray-600">Kerala, India</p>
                <div className="flex flex-col items-center mt-6">
                  <a
                    className="text-lg group hover:bg-black hover:text-white rounded-4xl border-2 border-black px-4 py-2 max-w-48 flex gap-x-1 items-center outline-0 transition duration-300"
                    href="mailto:arunrajwebdeveloper@gmail.com"
                  >
                    <span>Say Hello</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24px"
                      height="24px"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <g id="Arrow / Arrow_Up_Right_SM">
                        <path
                          d="M8 16L16 8M16 8H10M16 8V14"
                          stroke="#000000"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="group-hover:stroke-white stroke-black transition duration-300"
                        />
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
