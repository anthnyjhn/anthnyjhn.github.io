import React from "react";

const Projects = () => {
  return (
    <div className="my-15">
      <h2 className="my-6 font-semibold">PROJECTS</h2>
      <div className="grid grid-cols-12 mb-12">
        <div className="col-span-3 pr-8 pt-1">
          <img
            src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75"
            alt=""
            className="max-w-full hover:outline-1 "
          />
        </div>
        <div className="col-span-9">
          <p className="font-semibold mb-2 text-lg">
            Build a Spotify Connected App
          </p>
          <p className="mb-3">
            Video course that teaches how to build a web app with the Spotify
            Web API. Topics covered include the principles of REST APIs, user
            auth flows, Node, Express, React, Styled Components, and more.
          </p>
          <div className="flex  gap-1.5">
            <span className="bg-[#141414] px-3 py-1 text-sm rounded-2xl ">
              React
            </span>
            <span className="bg-[#141414]  px-3 py-1 text-sm rounded-2xl ">
              Express
            </span>
            <span className="bg-[#141414]  px-3 py-1 text-sm rounded-2xl ">
              Heroku
            </span>
          </div>
        </div>
      </div>
      <h2>
        <a href="#" className="font-bold">
          View Full Project Archive
        </a>
      </h2>
    </div>
  );
};

export default Projects;
