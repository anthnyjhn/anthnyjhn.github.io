import React from "react";

const Tag = ({ tagName }) => {
  return (
    <span className="bg-[#141414] px-3 py-1 text-sm rounded-2xl">
      {tagName}
    </span>
  );
};

export default Tag;
