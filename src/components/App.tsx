import { Routes, Route } from "react-router";
import NavMenu from "./NavMenu";
import Hello from "./pages/Hello";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";

function App() {
  return (
    <>
      <NavMenu />
      <div>
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
