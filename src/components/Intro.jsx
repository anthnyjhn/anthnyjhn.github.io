import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSquareGithub,
  faSquareLinkedin,
} from "@fortawesome/free-brands-svg-icons";

import { faEarthAmericas, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Intro = () => {
  return (
    <div className="max-w-[50%] mt-4">
      <h1 className="text-5xl font-bold">Anthony C.</h1>
      <p className="text-xl font-semibold my-3">Software Engineer</p>
      <p className="text-md my-5">
        I build accessible, pixel-perfect experiences for the web.
      </p>

      <div className="flex gap-2">
        <FontAwesomeIcon icon={faSquareGithub} size="2x" />
        <FontAwesomeIcon icon={faSquareLinkedin} size="2x" />

        <FontAwesomeIcon icon={faEarthAmericas} size="2x" />
        <FontAwesomeIcon icon={faEnvelope} size="2x" />
      </div>
    </div>
  );
};

export default Intro;
