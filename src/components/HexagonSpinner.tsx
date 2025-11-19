import {
  motion,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { useLenis } from "../hooks/useLenis";
import CircularText from "./CircularText";
// Import the custom hook
// Adjust path as needed

// --- CONFIGURATION (Keep these constants for tuning) ---
const BASE_ROTATION_SPEED = 5;
const VELOCITY_MULTIPLIER = 10;
const MAPPING_RANGE = 500;

interface HexagonSpinnerProps {
  baseVelocity: number;
}

function HexagonSpinner({ baseVelocity }: HexagonSpinnerProps) {
  const baseRotation = useMotionValue(0);

  // 1. 🎯 CHANGE: Get scroll position from the Lenis integration hook
  const lenisScrollY = useLenis();

  // 2. Feed the Lenis scroll position into useVelocity
  const scrollVelocity = useVelocity(lenisScrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(
    smoothVelocity,
    [-MAPPING_RANGE, MAPPING_RANGE],
    [-VELOCITY_MULTIPLIER, VELOCITY_MULTIPLIER],
    { clamp: false }
  );

  // 3. Animation Loop (Rotation logic remains the same)
  useAnimationFrame((_, delta) => {
    let baseMovement = baseVelocity * BASE_ROTATION_SPEED * (delta / 1000);
    const accelerationMovement = baseMovement * velocityFactor.get();
    const totalMovement = baseMovement + accelerationMovement;

    baseRotation.set(baseRotation.get() + totalMovement);
  });

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        position: "sticky",
        top: 0,
        zIndex: 10,
        pointerEvents: "none",
      }}
    >
      <motion.div
        style={{
          rotate: baseRotation,
          transformOrigin: "center center",
          aspectRatio: 1,
          height: "100%",
        }}
      >
        <CircularText />
      </motion.div>
    </div>
  );
}

export default HexagonSpinner;
