import React from "react";

interface ButtonProps {
  text: string;
  className: string;
  gradient?: boolean;
}

const Button: React.FC<ButtonProps> = ({ text, className }) => {
  return (
    <button
      className={`${className} px-6 py-2 rounded-xl text-white 
    bg-gradient-to-r from-[#355c7d] via-[#6c5b7b] to-[#c06c84]`}
    >
      {text}
    </button>
  );
};

export default Button;
