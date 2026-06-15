import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Tag from "../components/Tag";

const ProjectTableRow = ({ project }) => {
  return (
    <tr className="border-b border-b-[#303030]">
      <td className="py-4 px-2 w-1/12">{project.projectDate}</td>
      <td className="w-4/12 py-4 px-2 hidden sm:table-cell">
        {project.projectName}
      </td>
      <td className="w-3/12 py-4 px-2 hidden lg:table-cellhidden md:table-cell">
        <div className="flex gap-1.5 flex-wrap flex-row">
          {project.tech.map((tagName, index) => (
            <Tag key={index} tagName={tagName} />
          ))}
        </div>
      </td>
      <td className="py-4 px-2 sm:w-4/12 lg:w-3/12 hidden sm:table-cell">
        <a href={project.projectLink} target="blank">
          {project.projectLinkDomain}
        </a>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          size="xs"
          className="ml-1"
        />
      </td>
      <td className="sm:hidden py-4 px-2">
        <a href={project.projectLink} target="blank">
          {project.projectName}
        </a>
        <FontAwesomeIcon
          icon={faArrowUpRightFromSquare}
          size="xs"
          className="ml-1"
        />
      </td>
    </tr>
  );
};

export default ProjectTableRow;
