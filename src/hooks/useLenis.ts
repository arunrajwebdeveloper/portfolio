import { useEffect } from "react";
import Lenis from "lenis";

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5, // scroll speed / smoothness
      smoothWheel: true,
      gestureOrientation: "vertical",
      touchMultiplier: 1.5,
    });

    // optional: log scroll position
    // lenis.on('scroll', ({ scroll }) => console.log(scroll));

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
};
