import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button className="button" role="button" onClick={onClick}>
      <span className="text">{children}</span>
    </button>
  );
};

export default Button;
