import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import ExperienceCard from "./ExperienceCard";
import mydata from "../data/mydata.json";

const Experience = () => {
  return (
    <section className="my-15">
      <h2 className="my-6 font-semibold" id="EXPERIENCE">
        EXPERIENCE
      </h2>
      <div>
        {mydata.experience.map((exp, index) => (
          <ExperienceCard key={index} experience={exp} />
        ))}
      </div>
      <h2>
        <a href="/resume.pdf" download="resume.pdf" className="font-bold">
          View Full Résumé{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
        </a>
      </h2>
    </section>
  );
};

export default Experience;
