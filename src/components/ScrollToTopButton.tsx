import { motion, useScroll, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
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
      if (latestScrollY > 600) {
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

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      variants={indicatorVariants}
      animate={isVisible ? "visible" : "hidden"}
      onClick={handleScrollToTop}
      className="fixed cursor-pointer -rotate-90 group right-2 top-1/2 -translate-y-1/2 z-50 mix-blend-difference hidden md:block"
    >
      {/* Line */}
      <span
        className="relative w-[180px] h-0.5 bg-white overflow-hidden z-1
                   after:content-[''] after:block after:absolute after:left-24 after:top-2.5 after:w-[70px] after:h-px after:bg-white"
      ></span>
      {/* Text */}
      <span className="text-white text-sm uppercase whitespace-nowrap">
        Scroll Top
      </span>
    </motion.div>
  );
};

export default ScrollToTopButton;
