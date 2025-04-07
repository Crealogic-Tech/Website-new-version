import React from "react";

const Button = ({ text, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} px-6 py-2 rounded-xl text-white 
        bg-gradient-to-tl from-[#355c7d] via-[#6c5b7b] to-[#c06c84] 
        hover:bg-gradient-to-tl hover:from-[#c06c84] hover:via-[#6c5b7b] hover:to-[#355c7d]`}
    >
      {text}
    </button>
  );
};

export default Button;
