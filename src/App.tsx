import { stackList } from "./assets/stack";
import HexagonSpinner from "./components/HexagonSpinner";
import Section from "./components/Section";
import StackItem from "./components/StackItem";
import { useLenis } from "./hooks/useLenis";

function App() {
  useLenis();
  return (
    <>
      <HexagonSpinner baseVelocity={4} />
      <Section className="flex flex-col justify-center space-y-8">
        <h1 className="text-black font-display font-semibold text-8xl text-center">
          Building modern, responsive web experiences with passion.
        </h1>
        <p className="mt-4 text-slate-700 text-6xl leading-20 text-center">
          I’m <span className="font-sans">Arun Raj</span>, by the way — thanks
          for visiting my portfolio!
        </p>
      </Section>

      <div className="bg-slate-50">
        <Section className="flex flex-col justify-center">
          <p className="mt-4 text-slate-700 text-7xl leading-20 text-center">
            My main focus is creating modern, responsive Frontend applications
            with ReactJS — but I also enjoy developing scalable APIs with
            NestJS.
          </p>
        </Section>
      </div>

      <Section className="flex justify-center items-center">
        <div className="flex flex-wrap">
          {stackList?.map((stack) => {
            return <StackItem key={stack.title} stack={stack} />;
          })}
        </div>
      </Section>

      <Section className="flex justify-center items-center" isBoxed={false}>
        <h2 className=" text-9xl font-display font-semibold">Works</h2>
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
        className="flex justify-center items-center bg-black"
        isBoxed={false}
      >
        <h2 className=" text-9xl font-display font-semibold text-white">
          Thank you
        </h2>
      </Section>
    </>
  );
}

export default App;
