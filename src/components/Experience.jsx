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
        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="inline-flex items-center gap-1 hover:gap-2 font-bold transition-transform duration-300 ease-out hover:translate-x-1"
        >
          View Full Résumé
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

export default Experience;
