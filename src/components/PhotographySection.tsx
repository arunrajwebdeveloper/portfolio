import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useLayoutEffect, useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1527873722743-67759f0854aa?w=1000",
  "https://images.unsplash.com/photo-1483519173755-be893fab1f46?w=1000",
  "https://images.unsplash.com/photo-1705674076072-41db4ff670e8?w=1000",
  "https://images.unsplash.com/photo-1591588368590-7b6f50b87663?w=1000",
  "https://images.unsplash.com/photo-1567605183923-0ae4e2284933?w=1000",
  "https://images.unsplash.com/photo-1580854256166-e01d8a34da4a?w=1000",
  "https://images.unsplash.com/photo-1521200052569-1799509456d3?w=1000",
];

const PhotographySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const horizontalRef = useRef<HTMLDivElement>(null);
  const [scrollLength, setScrollLength] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const loadedCountRef = useRef(0);

  const itemsPerScreen = 3;

  const calcScrollLength = () => {
    if (horizontalRef.current && sectionRef.current) {
      const totalWidth = horizontalRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const extraScroll = totalWidth - viewportWidth;
      sectionRef.current.style.height = `${window.innerHeight + extraScroll}px`;
      setScrollLength(extraScroll);
    }
  };

  const handleImageLoad = () => {
    loadedCountRef.current += 1;
    if (loadedCountRef.current === images.length) {
      setImagesLoaded(true);
    }
  };

  useLayoutEffect(() => {
    calcScrollLength();
    window.addEventListener("resize", calcScrollLength);
    return () => window.removeEventListener("resize", calcScrollLength);
  }, []);

  useLayoutEffect(() => {
    if (imagesLoaded) {
      calcScrollLength();
    }
  }, [imagesLoaded]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0px", `-${scrollLength}px`]
  );

  return (
    <section ref={sectionRef} className="relative bg-white h-screen">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center">
        <motion.div
          ref={horizontalRef}
          style={imagesLoaded ? { x } : { x: 0 }}
          className="flex items-center h-[70vh] will-change-transform"
        >
          {images.map((src, i) => {
            return (
              <div
                key={i}
                className={`shrink-0 px-8 w-[calc(100vw/${itemsPerScreen})] h-full flex items-center justify-center`}
              >
                <img
                  src={src}
                  alt={`Image ${i + 1}`}
                  onLoad={handleImageLoad}
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default PhotographySection;
