import React from "react";

// Components
import Intro from "../components/Intro";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="2xl:grid grid-cols-2 ">
      <Intro />
      <About />
      <Experience />
      <Projects />
    </div>
  );
};

export default Home;
