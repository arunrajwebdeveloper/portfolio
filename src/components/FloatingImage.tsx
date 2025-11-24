import React from "react";
import { motion } from "framer-motion";
import { useMouseParallax } from "../hooks/useMouseParallax";

interface FloatingImageProps {
  src: string;
  alt: string;
  factor: number; // Higher factor = faster movement (foreground)
  className: string; // Tailwind positioning classes (e.g., 'top-10 left-1/4')
}

const FloatingImage: React.FC<FloatingImageProps> = ({
  src,
  alt,
  factor,
  className,
}) => {
  // Get the transformed, smooth motion values
  const { x, y } = useMouseParallax(factor);

  return (
    // Apply the motion values (x and y) to the style prop
    <motion.div
      style={{ x, y }}
      className={`absolute rounded-lg overflow-hidden shadow-2xl ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </motion.div>
  );
};

export default FloatingImage;
