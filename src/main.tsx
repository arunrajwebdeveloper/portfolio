import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import "lenis/dist/lenis.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* if not using gh-pages use BrowserRouter with basename */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>
);
