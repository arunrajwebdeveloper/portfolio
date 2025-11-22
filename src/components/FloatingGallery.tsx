import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1527873722743-67759f0854aa?w=1000",
    w: 72,
  },
  {
    src: "https://images.unsplash.com/photo-1483519173755-be893fab1f46?w=1000",
    w: 72,
  },
  {
    src: "https://images.unsplash.com/photo-1705674076072-41db4ff670e8?w=1000",
    w: 56,
  },
  {
    src: "https://images.unsplash.com/photo-1591588368590-7b6f50b87663?w=1000",
    w: 64,
  },
  {
    src: "https://images.unsplash.com/photo-1567605183923-0ae4e2284933?w=1000",
    w: 52,
  },
  {
    src: "https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?w=1000",
    w: 52,
  },
  {
    src: "https://images.unsplash.com/photo-1521200052569-1799509456d3?w=1000",
    w: 56,
  },
  {
    src: "https://images.unsplash.com/photo-1591588368590-7b6f50b87663?w=1000",
    w: 56,
  },
  {
    src: "https://images.unsplash.com/photo-1567605183923-0ae4e2284933?w=1000",
    w: 52,
  },
];

export default function FloatingGrid() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const smoothX = useSpring(x, { stiffness: 30, damping: 15 });
  const smoothY = useSpring(y, { stiffness: 30, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { movementX, movementY } = e;
    x.set(x.get() + movementX * 0.2);
    y.set(y.get() + movementY * 0.2);
  };

  useEffect(() => {
    const decay = setInterval(() => {
      x.set(x.get() * 0.9);
      y.set(y.get() * 0.9);
    }, 16);
    return () => clearInterval(decay);
  }, [x, y]);

  // Divide images into 3 columns
  const columns = [images.slice(0, 3), images.slice(3, 6), images.slice(6, 9)];

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative h-screen w-full overflow-hidden bg-linear-to-b from-neutral-900 to-black cursor-default px-4 flex justify-between"
    >
      <div className="grid grid-cols-3 gap-12 h-full items-center justify-items-center w-full">
        {columns.map((col, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col gap-y-28 items-center justify-center w-sm"
          >
            {col.map((img, i) => {
              // Each image has its own multiplier for depth
              const depthMultiplier = 0.2 + i * 0.15 + colIndex * 0.05;

              return (
                <motion.img
                  key={i}
                  src={img.src}
                  alt={`img-${i}`}
                  className={`rounded-md w-[${img.w}rem]`}
                  style={{
                    x: useTransform(smoothX, (v) => v * depthMultiplier),
                    y: useTransform(smoothY, (v) => v * depthMultiplier),
                    rotate: useTransform(
                      smoothX,
                      [-100, 100],
                      [-2 * depthMultiplier * 5, 2 * depthMultiplier * 5]
                    ),
                    scale: useTransform(
                      smoothY,
                      [-100, 100],
                      [1, 1 + depthMultiplier * 0.05]
                    ),
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Title */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full text-center text-white flex "
        style={{
          background:
            "radial-gradient(circle, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 80%)",
        }}
      >
        <motion.div
          className="m-auto"
          style={{
            x: useTransform(smoothX, (v) => v * 0.25),
            y: useTransform(smoothY, (v) => v * 0.25),
          }}
        >
          <h1 className="text-4xl mb-2">Floating Images Grid</h1>
          <p className="text-gray-400 tracking-widest">
            React + Framer Motion + Tailwind
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
