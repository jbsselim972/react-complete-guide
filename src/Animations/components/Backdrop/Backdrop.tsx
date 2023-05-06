import React, { FC } from "react";

import classes from "./Backdrop.module.css";

const Backdrop: FC<{ show: boolean }> = ({ show }) => {
  return (
    <div
      className={`${classes.backdrop} ${
        show ? classes["backdrop-open"] : classes["backdrop-close"]
      }`}
    ></div>
  );
};

export default Backdrop;
