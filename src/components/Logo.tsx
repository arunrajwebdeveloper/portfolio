import { motion, useScroll, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

function Logo({
  magnetActive,
  setMagnetActive,
  setModalOpen,
}: {
  magnetActive: boolean;
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
      className="z-50 fixed bottom-6 left-1/2 -translate-x-1/2 w-14 h-14 bg-black rounded-full flex select-none"
      onClick={() => setModalOpen((prev: any) => !prev)}
    >
      {magnetActive ? (
        <motion.div
          layoutId="cursor"
          className="absolute inset-0 bg-[#ffc903] rounded-full flex z-10"
        ></motion.div>
      ) : null}
      <span className="m-auto relative z-20 transition duration-300 text-xl text-white">
        AR
      </span>
    </motion.div>
  );
}

export default Logo;
