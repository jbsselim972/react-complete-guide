import React from "react";

import "./Card.css";

interface CardProps {
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
