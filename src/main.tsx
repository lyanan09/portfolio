import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
// import "tailwindcss";
import "./styles/index.scss";
import "./locales/i18n";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <App />
  </StrictMode>,
);
