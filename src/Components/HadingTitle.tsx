import React from "react";

interface HadingProps {
  text: string;
  className: string;
}

const HadingTitle: React.FC<HadingProps> = ({ text, className }) => {
  return (
    <div className={`${className} gradient-text `}>
      <p className="!mx-0">{text}</p>
    </div>
  );
};

export default HadingTitle;
