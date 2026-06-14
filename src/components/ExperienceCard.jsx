import React from "react";

import Tag from "./Tag";

const ExperienceCard = ({ experience }) => {
  return (
    <div className="transition-transform duration-300 hover:scale-101 hover:bg-[#0f0f0f] rounded-md p-4 grid grid-cols-12 mb-10">
      <div className="col-span-3">
        <p className="text-sm font-semibold text-zinc-500">
          {experience.date.startDate} - {experience.date.endDate}
        </p>
      </div>

      <div className="col-span-9">
        <p className="font-semibold text-lg text-zinc-200">{experience.role}</p>

        <p className="font-normal mb-2 text-zinc-300">
          {experience.companyName}
        </p>

        <p className="mb-3 text-zinc-400">{experience.description}</p>

        <div className="flex flex-wrap gap-1.5">
          {experience.skills.map((skill, index) => (
            <Tag key={index} tagName={skill} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
