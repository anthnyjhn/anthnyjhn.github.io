import React from "react";

import Tag from "./Tag";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const ProjectCard = ({ project }) => {
  return (
    <div className="flex flex-wrap sm:grid grid-cols-12 mb-12 transition-transform duration-300 hover:scale-101 hover:bg-[#0f0f0f] rounded-md p-4">
      <div className="mb-4 sm:col-span-3 pr-8 pt-1">
        <img
          src={project.image}
          alt={project.projectName}
          className="max-w-full rounded"
        />
      </div>

      <div className="col-span-9">
        <p className="font-semibold mb-2 text-lg">
          <a href={project.projectLink} target="_blank" rel="noreferrer">
            {project.projectName}
            <FontAwesomeIcon
              icon={faArrowUpRightFromSquare}
              size="xs"
              className="ml-1"
            />
          </a>
        </p>

        <p className="mb-3 text-zinc-400">{project.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech, index) => (
            <Tag key={index} tagName={tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
