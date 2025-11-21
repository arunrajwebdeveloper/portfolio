import { stackList } from "./assets/stack";
import HexagonSpinner from "./components/HexagonSpinner";
import Section from "./components/Section";
import StackItem from "./components/StackItem";
import { useLenis } from "./hooks/useLenis";
import LandingSection from "./components/LandingSection";
import AboutSection from "./components/AboutSection";
import StackSection from "./components/StackSection";

function App() {
  useLenis();

  return (
    <>
      <HexagonSpinner baseVelocity={4} />
      <LandingSection />
      <AboutSection />
      <StackSection />

      <Section
        className="flex justify-center items-center bg-white"
        isBoxed={false}
      >
        <h2 className=" text-9xl">Works</h2>
      </Section>

      <Section
        className="flex justify-center items-center bg-red-900"
        isBoxed={false}
      >
        <div className="p-40">
          <img src="./projects/matrimony-screenshot-1.png" />
        </div>
      </Section>
      <Section
        className="flex justify-center items-center bg-indigo-950"
        isBoxed={false}
      >
        <div className="p-40">
          <img src="./projects/matrimony-screenshot-1.png" />
        </div>
      </Section>
      <Section
        className="flex justify-center items-center bg-orange-800"
        isBoxed={false}
      >
        <div className="p-40">
          <img src="./projects/matrimony-screenshot-1.png" />
        </div>
      </Section>

      <Section
        className="flex justify-center items-center bg-[#18a163]"
        isBoxed={false}
      >
        <h2 className=" text-9xl text-[#55ad85]">Thank you</h2>
      </Section>
    </>
  );
}

export default App;
