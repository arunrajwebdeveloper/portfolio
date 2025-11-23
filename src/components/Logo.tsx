import { motion } from "framer-motion";
import { cn } from "../lib/utils";

function Logo({
  magnetActive,
  setMagnetActive,
}: {
  magnetActive: boolean;
  setMagnetActive: any;
}) {
  return (
    <div
      onPointerEnter={() => setMagnetActive(true)}
      onPointerLeave={() => setMagnetActive(false)}
      className="z-50 fixed top-2 left-1/2 -translate-x-1/2 w-14 h-14 bg-slate-200 rounded-full flex"
    >
      {magnetActive ? (
        <motion.div
          layoutId="cursor"
          className="absolute inset-0 bg-orange-500 rounded-full flex z-10"
        ></motion.div>
      ) : null}
      <span
        className={cn(
          "m-auto relative z-20 transition duration-300 text-xl",
          magnetActive ? "text-white" : "text-black"
        )}
      >
        AR
      </span>
    </div>
  );
}

export default Logo;
