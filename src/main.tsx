import { createRoot } from "react-dom/client";
import "./output.css";
import { BrowserRouter } from "react-router";
import App from "./components/App";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
