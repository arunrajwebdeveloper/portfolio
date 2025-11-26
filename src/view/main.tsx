import HexagonSpinner from "../components/HexagonSpinner";
import LandingSection from "../components/LandingSection";
import AboutSection from "../components/AboutSection";
import StackSection from "../components/StackSection";
import Footer from "../components/Footer";
import Cursor from "../components/Cursor";
// import PhotographySection from "../components/PhotographySection";
// import FloatingGallery from "../components/FloatingGallery";
import { useState } from "react";
import RecentWorks from "../components/RecentWorks";
import HobbySection from "../components/HobbySection";
import Logo from "../components/Logo";

const Main = () => {
  const [magnetActive, setMagnetActive] = useState<boolean>(false);

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
};

export default Main;
