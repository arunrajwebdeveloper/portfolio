import { motion, useScroll, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

function Logo({
  magnetActive,
  setMagnetActive,
  setModalOpen,
  modalOpen,
}: {
  magnetActive: boolean;
  modalOpen: boolean;
  setMagnetActive: any;
  setModalOpen: any;
}) {
  const { scrollY } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  const indicatorVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 100,
      transition: { duration: 0.3 },
    },
    visible: {
      opacity: 1,
      y: 0, // Moves to its final position (0 offset)
      transition: { duration: 0.5, type: "spring", stiffness: 100 },
    },
  };

  useEffect(() => {
    // Function to update the visibility state based on scrollY position
    const updateVisibility = (latestScrollY: number) => {
      // Show the div if the scroll position is greater than 400px
      if (latestScrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Subscribe to the scrollY MotionValue
    const unsubscribe = scrollY.on("change", updateVisibility);

    // Cleanup function to remove the subscription when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  return (
    <motion.div
      variants={indicatorVariants}
      animate={isVisible ? "visible" : "hidden"}
      onPointerEnter={() => setMagnetActive(true)}
      onPointerLeave={() => setMagnetActive(false)}
      className="z-9999 fixed bottom-6 md:bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-black rounded-full flex select-none cursor-pointer"
      onClick={() => setModalOpen((prev: any) => !prev)}
    >
      {magnetActive ? (
        <motion.div
          layoutId="cursor"
          className="absolute inset-0 bg-[#ffc903]/80 rounded-full flex z-10"
        ></motion.div>
      ) : null}
      {modalOpen ? (
        <span className="m-auto relative z-20 transition duration-300 text-xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6L18 18" />
          </svg>
        </span>
      ) : (
        <>
          <img
            className="w-full h-full object-cover rounded-full overflow-hidden relative z-2"
            src="./photos/user.jpg"
            alt="arunraj photo"
          />
          <div className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-[#ffc903] opacity-50 z-1"></div>
        </>
      )}
    </motion.div>
  );
}

export default Logo;
