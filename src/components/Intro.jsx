import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faEarthAmericas, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <div className="max-w-full xl:max-w-[50%] mt-4">
      <h1 className="text-5xl text-gray-200 font-bold">Anthony John C.</h1>
      <p className="text-lg font-medium my-3">
        IT - Software Tech. & Data Science, 2027 at Swinburne University
      </p>
      <p className="text-md my-5 text-slate-400">
        Software Development · Networking · Cloud
      </p>

      <div className="flex gap-2">
        <a href="https://github.com/anthnyjhn" target="blank">
          <FontAwesomeIcon
            icon={faSquareGithub}
            className="text-zinc-200  hover:drop-shadow-[0_0_2px_white] transition-all duration-300"
            size="2x"
          />
        </a>

        <a href="https://www.linkedin.com/in/anthnyjhn/" target="blank">
          <FontAwesomeIcon
            icon={faSquareLinkedin}
            className="text-zinc-200  hover:drop-shadow-[0_0_2px_white] transition-all duration-300"
            size="2x"
          />
        </a>

        <a href="https://blog.anthnyjhn.com/" target="blank">
          <FontAwesomeIcon
            icon={faEarthAmericas}
            className="text-zinc-200  hover:drop-shadow-[0_0_2px_white] transition-all duration-300"
            size="2x"
          />
        </a>

        <a href="mailto:johncaronongan17@gmail.com" target="blank">
          <FontAwesomeIcon
            icon={faEnvelope}
            className="text-zinc-200  hover:drop-shadow-[0_0_2px_white] transition-all duration-300"
            size="2x"
          />
        </a>
      </div>
    </div>
  );
};

export default Intro;
