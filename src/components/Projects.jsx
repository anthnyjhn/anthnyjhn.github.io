import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Projects = () => {
  return (
    <section className="my-15">
      <h2 className="my-6 font-semibold" id="PROJECTS">
        PROJECTS
      </h2>
      <div>
        <div className="flex flex-wrap sm:grid grid-cols-12 mb-12">
          <div className="mb-4 sm:col-span-3 pr-8 pt-1">
            <img
              src="/antibrainrot.png"
              alt=""
              className="max-w-full rounded hover:outline-1 "
            />
          </div>
          <div className="col-span-9">
            <p className="font-semibold mb-2 text-lg">
              Anti-Brainrot Chrome Extension{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
            </p>
            <p className="mb-3 text-zinc-400">
              A browser extension that helps you focus by blocking short form
              contents and algorithm-suggested contents. Accumulated 520+
              installs and 50+ weekly active users.
            </p>
            <div className="flex flex-wrap gap-1.5">
              <span className="bg-[#141414] px-3 py-1 text-sm rounded-2xl ">
                JavaScript
              </span>
              <span className="bg-[#141414]  px-3 py-1 text-sm rounded-2xl ">
                HTML
              </span>
              <span className="bg-[#141414]  px-3 py-1 text-sm rounded-2xl ">
                Web Scraping
              </span>
            </div>
          </div>
        </div>
      </div>
      <h2>
        <a href="/archive" className="font-bold">
          View Full Project Archive{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
        </a>
      </h2>
    </section>
  );
};

export default Projects;
