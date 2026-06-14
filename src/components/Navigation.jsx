import React from "react";

const Navigation = () => {
  return (
    <nav>
      <ul className=" gap-8">
        <li>
          <a
            href="#ABOUT"
            className="inline-block transition-transform duration-300 hover:scale-115 hover:font-bold hover:text-white"
          >
            ABOUT
          </a>
        </li>

        <li>
          <a
            href="#EXPERIENCE"
            className="inline-block transition-transform duration-300 hover:scale-115 hover:font-bold hover:text-white"
          >
            EXPERIENCE
          </a>
        </li>

        <li>
          <a
            href="#PROJECTS"
            className="inline-block transition-transform duration-300 hover:scale-115 hover:font-bold hover:text-white"
          >
            PROJECT
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
