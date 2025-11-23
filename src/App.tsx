import HexagonSpinner from "./components/HexagonSpinner";
import Section from "./components/Section";
import { useLenis } from "./hooks/useLenis";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import StackSection from "./components/StackSection";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "./lib/utils";
import PhotographySection from "./components/PhotographySection";
import FloatingGallery from "./components/FloatingGallery";
import ScrollScale from "./components/ScrollScale";

function App() {
  const [magnetActive, setMagnetActive] = useState<boolean>(false);

  useLenis();

  return (
    <>
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

      <Cursor hideCursor={magnetActive} />
      <HexagonSpinner baseVelocity={4} />
      <LandingSection />
      <AboutSection />
      <StackSection />
      <FloatingGallery />
      {/* <PhotographySection /> */}

      <section className="flex flex-col justify-center bg-white w-full px-4 py-20 min-h-screen">
        <div className="max-w-6xl mx-auto relative">
          <h2 className=" text-9xl">Works</h2>
          <div className="">
            <div className="pt-20">
              <ScrollScale>
                <img src="./projects/matrimony-screenshot-1.png" />
              </ScrollScale>
            </div>
            <div className="pt-20">
              <ScrollScale>
                <img src="./projects/matrimony-screenshot-1.png" />
              </ScrollScale>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default App;
