import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import ProjectCard from "./ProjectCard";

import mydata from "../data/mydata.json";

const Projects = () => {
  return (
    <section className="my-15">
      <h2 className="my-6 font-semibold" id="PROJECTS">
        PROJECTS
      </h2>
      <div>
        {mydata.projects.map((proj, index) => (
          <ProjectCard key={index} project={proj} />
        ))}
      </div>
      <h2>
        <a
          href="/archive"
          className="inline-flex items-center gap-1 hover:gap-2 font-bold transition-transform duration-300 ease-out hover:translate-x-1"
          target="blank"
        >
          View Projects Archive
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            size="xs"
            className="transition-transform duration-300 ease-out"
          />
        </a>
      </h2>
    </section>
  );
};

export default Projects;
