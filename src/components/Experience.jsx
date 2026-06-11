import React from "react";

const Experience = () => {
  return (
    <div className="my-15">
      <h2 className="my-6 font-semibold">EXPERIENCE</h2>
      <div className="grid grid-cols-12 mb-12">
        <div className="col-span-3">
          <p className="text-sm font-semibold text-[#777777]">2024 - PRESENT</p>
        </div>
        <div className="col-span-9">
          <p className="font-semibold mb-2 text-lg">
            Senior Frontend Engineer, Accessibility - Klaviyo
          </p>
          <p className="mb-3">
            Build and maintain critical components used to construct Klaviyo’s
            frontend, across the whole product. Work closely with
            cross-functional teams, including developers, designers, and product
            managers, to implement and advocate for best practices in web
            accessibility.
          </p>
          <div className="flex  gap-1.5">
            <span className="bg-[#141414] px-3 py-1 text-sm rounded-2xl ">
              JavaScript
            </span>
            <span className="bg-[#141414]  px-3 py-1 text-sm rounded-2xl ">
              TypeScript
            </span>
            <span className="bg-[#141414]  px-3 py-1 text-sm rounded-2xl ">
              React
            </span>
          </div>
        </div>
      </div>
      <h2>
        <a href="#" className="font-bold">
          View Full Résumé
        </a>
      </h2>
    </div>
  );
};

export default Experience;
