import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

import ProjectTableRow from "../components/ProjectTableRow";

import mydata from "../data/mydata.json";

const Archive = () => {
  return (
    <div className="xl:pt-15">
      <h1>
        <FontAwesomeIcon icon={faArrowLeft} />
        <a href="/" className="ml-1">
          Back to Home
        </a>
      </h1>
      <table className="w-full mt-20 text-left">
        <thead>
          <tr className="border-b-2">
            <th className="px-2  w-1/12">Year</th>
            <th className="hidden px-2 sm:table-cell">Project</th>
            <th className="hidden px-2 md:table-cell">Tech Stack</th>
            <th className="hidden px-2 sm:table-cell">Link</th>
            <th className="px-2 sm:hidden">Project (Link)</th>
          </tr>
        </thead>
        <tbody>
          {mydata.projects
            .sort((a, b) => b.projectDate - a.projectDate)
            .map((proj, index) => (
              <ProjectTableRow key={index} project={proj} />
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Archive;
