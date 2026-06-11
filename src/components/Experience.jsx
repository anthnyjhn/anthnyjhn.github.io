import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const Experience = () => {
  return (
    <div className="my-15">
      <h2 className="my-6 font-semibold">EXPERIENCE</h2>
      <div className="grid grid-cols-12 mb-12">
        <div className="col-span-3">
          <p className="text-sm font-semibold text-zinc-500">2025 - PRESENT</p>
        </div>
        <div className="col-span-9 mb-10">
          <p className="font-semibold text-lg text-zinc-200">
            IT Specialist (Self-Employed)
          </p>
          <p className="font-normal mb-2  text-zinc-300">
            Condobolin IT Solutions
          </p>
          <p className="mb-3 text-zinc-400">
            Troubleshoot complex infrastracture, provide technical assistance
            and administer system in production environments. Configure and
            maintain Linux and Windows server systems and provide updates and
            recommendations.
          </p>
          <div className="flex flex-wrap gap-1.5">
            <span className="bg-[#141414] px-3 py-1 text-sm rounded-2xl ">
              Linux
            </span>
            <span className="bg-[#141414]  px-3 py-1 text-sm rounded-2xl ">
              Servers
            </span>
            <span className="bg-[#141414]  px-3 py-1 text-sm rounded-2xl ">
              Customer Support
            </span>
          </div>
        </div>
        <div className="col-span-3">
          <p className="text-sm font-semibold text-zinc-500">2024 - PRESENT</p>
        </div>
        <div className="col-span-9">
          <p className="font-semibold text-lg text-zinc-200">
            Wide Format Printer Operator
          </p>
          <p className="font-normal mb-2  text-zinc-300">
            Progress Printing Pty Ltd
          </p>
          <p className="mb-3 text-zinc-400">
            Operate, maintain and troubleshoot printing equipments. Work
            collaboratively with sales team, managers, and print finishers to
            offer the best output to our clients.
          </p>
          <div className="flex flex-wrap gap-1.5">
            <span className="bg-[#141414] px-3 py-1 text-sm rounded-2xl ">
              Teamwork
            </span>
            <span className="bg-[#141414]  px-3 py-1 text-sm rounded-2xl ">
              Communication
            </span>
            <span className="bg-[#141414]  px-3 py-1 text-sm rounded-2xl ">
              Creativity
            </span>
          </div>
        </div>
      </div>
      <h2>
        <a href="/resume.pdf" download="resume.pdf" className="font-bold">
          View Full Résumé{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="xs" />
        </a>
      </h2>
    </div>
  );
};

export default Experience;
