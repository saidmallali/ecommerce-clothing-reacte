import React from "react";
import "./custom-button.style.scss";

const CustomButton = ({ onClick, children, ...otherProps }) => (
  <button onClick={onClick} className="custom-button" {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
