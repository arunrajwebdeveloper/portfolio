import { stackList } from "./assets/stack";
import Section from "./components/Section";
import StackItem from "./components/StackItem";
import { useLenis } from "./hooks/useLenis";

function App() {
  useLenis();
  //---
  return (
    <>
      <Section className="flex flex-col justify-center space-y-8">
        <h1 className="text-black font-display font-semibold text-9xl">
          Building modern, responsive web experiences with passion.
        </h1>
        <p className="mt-4 text-slate-700 text-6xl leading-20">
          I’m <span className="font-sans">Arun Raj</span>, by the way — thanks
          for visiting my portfolio!
        </p>
      </Section>

      <div className="bg-slate-50">
        <Section className="flex flex-col justify-center">
          <p className="mt-4 text-slate-700 text-7xl leading-20">
            My main focus is creating modern, responsive Frontend applications
            with ReactJS — but I also enjoy developing scalable APIs with
            NestJS.
          </p>
        </Section>
      </div>

      <Section className="flex justify-center items-center">
        <div className="flex flex-wrap">
          {stackList?.map((stack) => {
            return <StackItem stack={stack} />;
          })}
        </div>
      </Section>

      <Section className="flex justify-center items-center">
        <div>Works</div>
      </Section>
    </>
  );
}

export default App;
