import { FC } from "react";

import classes from "./Modal.module.css";

const Modal: FC<{ show: boolean; closed: () => void }> = ({ closed, show }) => {
  return (
    <div
      className={`${classes.modal} ${
        show ? classes["modal-open"] : classes["modal-close"]
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
