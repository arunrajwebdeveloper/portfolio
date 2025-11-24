import HexagonSpinner from "./components/HexagonSpinner";
import { useLenis } from "./hooks/useLenis";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import StackSection from "./components/StackSection";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
// import PhotographySection from "./components/PhotographySection";
import FloatingGallery from "./components/FloatingGallery";
import ScrollScale from "./components/ScrollScale";
import { useState } from "react";
import Logo from "./components/Logo";

function App() {
  const [magnetActive, setMagnetActive] = useState<boolean>(false);
  useLenis();

  return (
    <>
      <Logo magnetActive={magnetActive} setMagnetActive={setMagnetActive} />
      <Cursor hideCursor={magnetActive} />
      <HexagonSpinner baseVelocity={4} />
      <LandingSection />
      <AboutSection />
      <StackSection />

      {/* <PhotographySection /> */}

      <section className="flex flex-col justify-center bg-white w-full px-4 py-20 min-h-screen">
        <div className="relative">
          <h2 className="text-2xl text-center">Recent Works</h2>
          <div className="grid grid-cols-2 items-start gap-8 mt-32">
            <div className=" bg-green-50  rounded-2xl overflow-hidden">
              {/* <ScrollScale> */}
              <img
                src="./projects/matrimony-screenshot-1.png"
                className="translate-y-1/4 -translate-x-1/4"
              />
              {/* </ScrollScale> */}
            </div>
            <div className="pt-20 bg-yellow-50 p-20 rounded-2xl overflow-hidden mt-52">
              {/* <ScrollScale> */}
              <img
                src="./projects/matrimony-screenshot-1.png"
                className="translate-y-1/4 translate-x-1/4"
              />
              {/* </ScrollScale> */}
            </div>
            <div className=" bg-red-50  rounded-2xl overflow-hidden">
              {/* <ScrollScale> */}
              <img
                src="./projects/matrimony-screenshot-1.png"
                className="translate-y-1/4 -translate-x-1/4"
              />
              {/* </ScrollScale> */}
            </div>
            <div className="pt-20 bg-violet-50 p-20 rounded-2xl overflow-hidden mt-52">
              {/* <ScrollScale> */}
              <img
                src="./projects/matrimony-screenshot-1.png"
                className="translate-y-1/4 translate-x-1/4"
              />
              {/* </ScrollScale> */}
            </div>
          </div>
        </div>
      </section>
      <FloatingGallery />
      <Footer />
    </>
  );
}

export default App;
