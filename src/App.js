import { Routes, Route, useLocation } from "react-router-dom";
import Landing from './containers/home/Landing';
import Navbar from "./navbar/Navbar";
import particles from "./utils/particles";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Resume from './containers/resume/Resume'
import { Box } from "@mui/material";
import About from "./containers/about/About";
import Projects from "./containers/projects/Projects";
import Contact from "./containers/contact/Contact";
import NavBox from "./containers/navbox/NavBox";
import { useState } from "react";

function App() {
  const location = useLocation();
  console.log(location);

  const handleInit = async (main) => {
    await loadFull(main);
  };
  const [display, setdisplay] = useState(false)

  const renderParticleJsInHomePage = location.pathname === "/";
  let size = window.innerWidth>700
  return (
    <Box>
      {/* particles js */}

      {renderParticleJsInHomePage && (
        <Particles id="particles" options={particles} init={handleInit} />
      )}

      {/* navbar */}
     {!display&&<Navbar setdisplay={setdisplay}/>||
      display&&<NavBox setdisplay={setdisplay}/>}
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/resume" element={<Resume />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>

      </Routes>
    </Box>
  );
}

export default App;
