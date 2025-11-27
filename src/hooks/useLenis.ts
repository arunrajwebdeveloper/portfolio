import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { type MotionValue, useMotionValue } from "framer-motion";

/**
 * Initializes Lenis and provides a MotionValue that tracks Lenis's scroll position.
 */
export const useLenis = (): MotionValue<number> => {
  // Use MotionValue to store the smooth scroll position
  const lenisScrollY = useMotionValue<number>(0);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      orientation: "vertical",
      gestureOrientation: "vertical",
      syncTouch: true,
      wheelMultiplier: 1.5,
      touchMultiplier: 5,
      lerp: 0.3,
    });
    lenisRef.current = lenis;

    // Hook the Lenis 'scroll' event to update our MotionValue
    const updateScroll = ({ scroll }: { scroll: number }) => {
      lenisScrollY.set(scroll);
    };

    lenis.on("scroll", updateScroll);

    // Function for smooth frame updates
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Cleanup on unmount
    return () => {
      lenis.off("scroll", updateScroll);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [lenisScrollY]);

  // Return the motion value instead of the default scrollY
  return lenisScrollY;
};
