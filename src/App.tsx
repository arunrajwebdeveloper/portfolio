import HexagonSpinner from "./components/HexagonSpinner";
import { useLenis } from "./hooks/useLenis";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import StackSection from "./components/StackSection";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
// import PhotographySection from "./components/PhotographySection";
// import FloatingGallery from "./components/FloatingGallery";
import { useState } from "react";
import Logo from "./components/Logo";
import RecentWorks from "./components/RecentWorks";
import HobbySection from "./components/HobbySection";

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
      <RecentWorks />

      {/* <PhotographySection /> */}

      {/* <FloatingGallery /> */}

      <HobbySection />
      <Footer />
    </>
  );
}

export default App;
