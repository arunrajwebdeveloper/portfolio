import { useEffect } from "react";
import {
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

// Define the shape of the hook's return value
interface ParallaxValues {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

/**
 * Custom hook to create smooth, mouse-driven MotionValues for parallax.
 * @param factor - The multiplier for how much the element should move in pixels.
 */
export const useMouseParallax = (factor: number = 0): ParallaxValues => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Configuration for the "floating" spring effect
  const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };

  // Create smooth, spring-based MotionValues
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig); // Removed springY redundancy

  useEffect(() => {
    // Check if window is defined (for SSR safety)
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      // Set the raw MotionValues to the mouse coordinates
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform the smooth mouse position (0 to window width/height)
  // to the element's movement range (-factor to +factor pixels).
  const x: MotionValue<number> = useTransform(
    smoothMouseX,
    [0, typeof window !== "undefined" ? window.innerWidth : 1920],
    [-factor, factor]
  );

  const y: MotionValue<number> = useTransform(
    smoothMouseY,
    [0, typeof window !== "undefined" ? window.innerHeight : 1080],
    [-factor, factor]
  );

  return { x, y };
};
