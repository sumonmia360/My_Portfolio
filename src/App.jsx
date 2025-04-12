import React from "react";
import "./index.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Bio from "./components/Bio";
import Skills from "./components/Skills";

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-img bg-center"></div>
      <div className="relative z-10 flex flex-col items-center space-y-8 container h-full p-4 mx-auto">
        <Navbar />
        <Hero />
        <Projects />
        <Bio />
        <Skills />
      </div>
    </div>
  );
};
export default App;
