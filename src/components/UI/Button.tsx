import React from "react";

import "./Button.css";

interface ButtonProps {
  type: HTMLButtonElement["type"] | undefined;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ type, onClick, children }) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
