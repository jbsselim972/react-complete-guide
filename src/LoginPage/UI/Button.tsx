import React from "react";
// import styled from "styled-components";
import classes from "./Button.module.css";

interface ButtonProps {
  type?: HTMLButtonElement["type"] | undefined;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  type,
  onClick,
  children,
  disabled,
  className,
}) => {
  return (
    <button
      type={type || "button"}
      className={`${classes.button} ${className}`}
      onClick={onClick}
      disabled={disabled || false}
    >
      {children}
    </button>
  );
};

export default Button;
