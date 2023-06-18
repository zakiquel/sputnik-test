import React from "react";
import "./MyButton.css";

const MyButton = ({ children, className, ...props }) => {
  return (
    <button {...props} className={`btn ${className}`}>
      {children}
    </button>
  );
};

export default MyButton;