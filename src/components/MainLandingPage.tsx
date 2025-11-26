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

const BASE_ROTATION_SPEED = 5;
const VELOCITY_MULTIPLIER = 10;
const MAPPING_RANGE = 500;
const PARALLAX_RANGE = 500; // adjust how much to move vertically

interface MainLandingPageProps {
  baseVelocity: number;
}

function MainLandingPage({ baseVelocity }: MainLandingPageProps) {
  // Lenis scroll position (motion value)
  const lenisScrollY = useLenis();

  // Smooth velocity based on Lenis scroll
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

  // ✅ Parallax: map Lenis scroll to a slow upward translate
  const parallaxY = useTransform(lenisScrollY, [0, 2000], [0, -PARALLAX_RANGE]);

  // Rotation logic
  const baseRotation = useMotionValue(0);
  useAnimationFrame((_, delta) => {
    const baseMovement = baseVelocity * BASE_ROTATION_SPEED * (delta / 1000);
    const accelerationMovement = baseMovement * velocityFactor.get();
    baseRotation.set(baseRotation.get() + baseMovement + accelerationMovement);
  });

  return (
    <motion.div
      style={{
        y: parallaxY, // parallax effect based on Lenis scroll
        position: "sticky",
        top: 0,
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffc903",
        zIndex: -1,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Rotating Spinner */}
      <motion.div
        style={{
          rotate: baseRotation,
          transformOrigin: "center center",
          aspectRatio: 1,
          height: "100%",
          position: "relative",
          zIndex: 10,
        }}
      >
        <CircularText />
      </motion.div>

      {/* SVG Background */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 51.831 29.108"
        className="absolute top-0 left-0 right-0 bottom-0"
      >
        <path
          fill="#000000"
          d="M3.287 0L0 28.458h.238l1.517-13.152H4.64l1.465 13.152h1.011L3.949 0zm4.722 0v28.457h.967V13.924l4.521 14.533h1.264L10.24 13.924c.526-.014.987-.217 1.383-.61s.729-.915.996-1.565a10.02 10.02 0 0 0 .602-2.236c.134-.854.201-1.734.201-2.642 0-.921-.067-1.796-.201-2.623s-.327-1.551-.595-2.175c-.268-.637-.602-1.138-1.004-1.504A1.98 1.98 0 0 0 10.218 0zm6.901 0v20.753c0 1.342.089 2.52.268 3.537.178 1.003.414 1.837.706 2.501s.625 1.165.996 1.504c.372.325.754.481 1.146.468.392 0 .773-.169 1.145-.508s.704-.84.996-1.504c.292-.678.528-1.511.706-2.5.178-1.003.268-2.168.268-3.496V0h-.223v20.753c0 1.165-.072 2.182-.215 3.049-.144.854-.335 1.572-.573 2.155-.238.569-.508.996-.811 1.281-.297.271-.605.407-.922.407s-.627-.149-.93-.448-.565-.732-.803-1.301c-.238-.583-.429-1.301-.573-2.155s-.215-1.85-.215-2.988V0zm7.124 0v28.477h.223V.813l6.945 28.295V0h-.223v23.436L23.224 0zm11.779 0v28.457h.967V13.924l4.521 14.533h1.264l-4.521-14.533a1.98 1.98 0 0 0 1.383-.61c.397-.393.729-.915.997-1.565a10.02 10.02 0 0 0 .602-2.236c.134-.854.201-1.734.201-2.642 0-.921-.067-1.796-.201-2.623s-.327-1.551-.595-2.175c-.268-.637-.603-1.138-1.004-1.504A1.98 1.98 0 0 0 36.022 0zm10.56 0l-3.287 28.457h.238l1.517-13.152h2.885l1.465 13.152h1.011L45.035 0zm6.492 0v24.697a9.22 9.22 0 0 1-.082 1.301c-.05.366-.116.671-.201.915s-.174.427-.283.549-.213.183-.327.183-.216-.054-.32-.163c-.099-.122-.188-.298-.268-.529s-.144-.515-.193-.854a8.68 8.68 0 0 1-.074-1.199h-.245a9.71 9.71 0 0 0 .119 1.626c.084.461.193.847.327 1.159s.288.549.461.712c.174.149.352.224.535.224s.372-.081.55-.244.347-.407.49-.732c.144-.339.258-.752.342-1.24s.134-1.057.134-1.707V0zM8.976.63h.885c.416 0 .781.176 1.093.529.317.339.58.799.789 1.382a9.72 9.72 0 0 1 .476 2.033c.104.759.156 1.558.156 2.398s-.052 1.647-.156 2.419a9.72 9.72 0 0 1-.476 2.033c-.208.583-.471 1.05-.789 1.402-.312.339-.677.508-1.093.508h-.885zm25.804 0h.885c.416 0 .781.176 1.093.529.317.339.58.799.789 1.382a9.72 9.72 0 0 1 .476 2.033c.104.759.156 1.558.156 2.398s-.052 1.647-.156 2.419a9.72 9.72 0 0 1-.476 2.033c-.208.583-.471 1.05-.789 1.402-.312.339-.677.508-1.093.508h-.885zM3.227 2.602l1.346 12.094H1.83zm41.086 0l1.346 12.094h-2.744z"
        />
      </svg>
    </motion.div>
  );
}

export default MainLandingPage;
