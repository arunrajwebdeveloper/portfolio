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
      className="relative h-screen w-full overflow-hidden bg-linear-to-b from-neutral-900 to-black cursor-default px-4 flex justify-between items-center"
    >
      <div className="grid grid-cols-3 gap-12 h-full items-center justify-items-center w-full">
        {columns.map((col, colIndex) => (
          <div
            key={colIndex}
            className="flex flex-col gap-y-28 items-center justify-center w-xs"
          >
            {col.map((img, i) => {
              // Each image has its own multiplier for depth
              const depthMultiplier = 0.2 + i * 0.15 + colIndex * 0.05;

              return (
                <motion.img
                  key={i}
                  src={img.src}
                  alt={`img-${i}`}
                  className={`rounded-md w-[${img.w}rem] aspect-square object-cover`}
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
          className="m-auto max-w-2xl flex flex-col items-center gap-8"
          style={{
            x: useTransform(smoothX, (v) => v * 0.25),
            y: useTransform(smoothY, (v) => v * 0.25),
          }}
        >
          <h1 className="text-4xl mb-2">
            Capturing moments, telling stories, and freezing memories through my
            lens. Photography is my creative escape and passion.
          </h1>
          <a
            href="/"
            target="_blank"
            className="flex items-center gap-2 bg-[#ff6900] px-6 py-4 rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="80"
              height="80"
              viewBox="0 0 20 20"
              className="w-6 h-6"
            >
              <path
                d="M5.87.123C4.242.196 2.831.594 1.691 1.729.548 2.869.155 4.286.082 5.897.036 6.902-.232 14.498.544 16.49a5.04 5.04 0 0 0 2.91 2.902c.633.246 1.355.413 2.415.462 8.861.401 12.145.183 13.531-3.364.246-.631.415-1.353.462-2.41.405-8.884-.066-10.809-1.61-12.352C17.027.507 15.586-.325 5.87.123m.082 17.945c-.97-.044-1.497-.205-1.848-.341-.884-.343-1.547-1.004-1.889-1.883-.591-1.514-.395-8.703-.342-9.866.052-1.139.283-2.181 1.087-2.985C3.954 2 5.24 1.513 13.993 1.908c1.142.052 2.186.282 2.992 1.084.995.993 1.489 2.288 1.087 11.008-.044.968-.206 1.493-.342 1.843-.901 2.308-2.972 2.628-11.778 2.224M14.09 4.69c0 .657.534 1.191 1.194 1.191s1.195-.534 1.195-1.191-.535-1.191-1.195-1.191-1.194.534-1.194 1.191M4.863 9.988c0 2.815 2.288 5.097 5.11 5.097s5.11-2.282 5.11-5.097-2.288-5.096-5.11-5.096-5.11 2.281-5.11 5.096m1.793 0c0-1.826 1.485-3.308 3.316-3.308s3.316 1.482 3.316 3.308-1.485 3.309-3.316 3.309-3.316-1.482-3.316-3.309"
                fill-rule="evenodd"
                fill="#ffffff"
              />
            </svg>
            <p className="text-white text-lg m-0">Follow me on Instagram</p>
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
