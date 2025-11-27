import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { useLenis } from "./hooks/useLenis";
import Spinner from "./components/Spinner";

const Main = lazy(() => import("./view/main"));
const Photography = lazy(() => import("./view/photography"));

function App() {
  useLenis();
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/portfolio/" element={<Main />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </Suspense>
  );
}

export default App;
