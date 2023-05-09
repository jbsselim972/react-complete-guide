import { FC } from "react";

import classes from "./Modal.module.css";

const Modal: FC<{ show: boolean | string; closed: () => void }> = ({
  closed,
  show,
}) => {
  return (
    <div
      className={`${classes.modal} ${
        show === "entering"
          ? classes["modal-open"]
          : show === "exiting"
          ? classes["modal-close"]
          : null
      }`}
    >
      <h1>A Modal</h1>
      <button className="Button" onClick={closed}>
        Dismiss
      </button>
    </div>
  );
};

export default Modal;
