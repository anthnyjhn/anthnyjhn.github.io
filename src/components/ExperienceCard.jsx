import React from "react";

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
            <span
              key={index}
              className="bg-[#141414] px-3 py-1 text-sm rounded-2xl"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
