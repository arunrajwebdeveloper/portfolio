import { motion, useScroll, type Variants } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollToTopButton = () => {
  const { scrollY, scrollYProgress } = useScroll();
  const [isVisible, setIsVisible] = useState(false);

  console.log("object :>> ", scrollY, scrollYProgress);

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
      className="fixed w-[180px] gap-x-4 items-center cursor-pointer -rotate-90 group -right-10 top-1/2 -translate-y-1/2 z-50 mix-blend-difference hidden md:flex"
    >
      {/* Text */}
      <span className="text-white text-sm uppercase whitespace-nowrap">
        Scroll Top
      </span>

      {/* Line */}
      <div className="relative bg-black w-[180px] h-px overflow-hidden z-1">
        <motion.div
          style={{
            scaleX: scrollYProgress,
          }}
          className="bg-white origin-right w-full h-full top-0 left-0 z-1"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default ScrollToTopButton;
