import React from "react";

import "./Card.css";

const Card: React.FC<{
  className?: string;
  children: React.ReactNode | React.ReactNode[];
}> = ({ children, className }) => {
  const classes = "card " + className;
  return <div className={classes}>{children}</div>;
};

export default Card;
