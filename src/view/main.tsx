import MainLandingPage from "../components/MainLandingPage";
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
import Modal from "../components/Modal";
import ParallaxText from "../components/ParallaxText";

const Main = () => {
  const [magnetActive, setMagnetActive] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <Logo
        magnetActive={magnetActive}
        setMagnetActive={setMagnetActive}
        setModalOpen={setModalOpen}
        modalOpen={modalOpen}
      />
      <Cursor hideCursor={magnetActive} />
      <MainLandingPage baseVelocity={4} />
      <LandingSection />
      <AboutSection />
      <StackSection />
      <RecentWorks />
      {/* <PhotographySection /> */}
      {/* <FloatingGallery /> */}
      <section className="bg-white flex flex-col gap-0 w-full">
        <ParallaxText baseVelocity={-1}>Code Learn Build Repeat</ParallaxText>
        <ParallaxText baseVelocity={1}>Code Learn Build Repeat</ParallaxText>
      </section>

      <HobbySection />
      <Footer />

      <Modal isOpen={modalOpen} handleClose={() => setModalOpen(false)} />
    </>
  );
};

export default Main;
