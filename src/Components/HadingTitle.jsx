import React from "react";

const HadingTitle = ({ text, className }) => {
  return (
    <div className={`${className} gradient-text`}>
      <p className="!mx-0 !text-center ">{text}</p>
    </div>
  );
};

export default HadingTitle;
