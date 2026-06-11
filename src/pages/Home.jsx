import React from "react";

// Components
import Intro from "../components/Intro";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="xl:grid grid-cols-2 ">
      <div>
        <Intro className="sticky" />
      </div>
      <div>
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
