import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import FloatingImage from "./FloatingImage";

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
    src: "",
    w: 52,
  },
];

export default function FloatingGrid() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-linear-to-b from-neutral-900 to-black cursor-default px-4 flex justify-center items-center">
      <h1 className="text-white text-6xl z-20 pointer-events-none">
        Parallax Floating.
      </h1>

      <FloatingImage
        src="https://images.unsplash.com/photo-1567605183923-0ae4e2284933?w=1000"
        alt="Cybertruck"
        factor={40} // Moves the most (closest)
        className="top-[15vh] left-[20vw] w-48 h-36"
      />

      <FloatingImage
        src="https://images.unsplash.com/photo-1527873722743-67759f0854aa?w=1000"
        alt="Record Player"
        factor={-25} // Negative factor moves in the opposite direction
        className="top-[10vh] left-[40vw] w-64 h-40"
      />

      <FloatingImage
        src="https://images.unsplash.com/photo-1705674076072-41db4ff670e8?w=1000"
        alt="Bedroom"
        factor={15} // Moves the least (furthest)
        className="top-[15vh] right-[10vw] w-72 h-48"
      />

      <FloatingImage
        src="https://images.unsplash.com/photo-1705674076072-41db4ff670e8?w=1000"
        alt="Turntable"
        factor={20}
        className="top-[45vh] left-[15vw] w-60 h-40"
      />

      <FloatingImage
        src="https://images.unsplash.com/photo-1521200052569-1799509456d3?w=1000"
        alt="Turntable"
        factor={40} // Moves fastest (Closest foreground)
        className="bottom-[10vh] left-[30vw] w-72 h-60"
      />

      <FloatingImage
        src="https://images.unsplash.com/photo-1567605183923-0ae4e2284933?w=1000"
        alt="Speaker"
        factor={-15} // Mid-to-Background movement
        className="bottom-[5vh] right-[15vw] w-64 h-48"
      />
    </section>
  );
}
