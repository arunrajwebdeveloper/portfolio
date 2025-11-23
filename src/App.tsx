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
