import React from "react";

// Components
import Intro from "../components/Intro";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";

const Home = () => {
  return (
    <div className="xl:grid xl:grid-cols-2 xl:pt-15">
      <div className="xl:ml-10 xl:fixed xl:w-[50%] col-span-1">
        <Intro />
      </div>
      <div className="xl:col-start-2">
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};

export default Home;
