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
import { AnimatePresence } from "framer-motion";
import Modal from "../components/Modal";

const Main = () => {
  const [magnetActive, setMagnetActive] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  return (
    <>
      <Logo
        magnetActive={magnetActive}
        setMagnetActive={setMagnetActive}
        setModalOpen={setModalOpen}
      />
      <Cursor hideCursor={magnetActive} />
      <MainLandingPage baseVelocity={4} />
      <LandingSection />
      <AboutSection />
      <StackSection />
      <RecentWorks />
      {/* <PhotographySection /> */}
      {/* <FloatingGallery /> */}
      <HobbySection />
      <Footer />

      <Modal isOpen={modalOpen} handleClose={() => setModalOpen(false)} />
    </>
  );
};

export default Main;
