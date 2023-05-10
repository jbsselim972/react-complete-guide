import { FC } from "react";

import classes from "./Modal.module.css";
import { CSSTransition } from "react-transition-group";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const Modal: FC<{ show: boolean; closed: () => void }> = ({ closed, show }) => {
  return (
    <CSSTransition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={animationTiming}
      classNames={{
        enter: "",
        enterActive: classes.modalopen,
        exit: "",
        exitActive: classes.modalclose,
      }}
    >
      <div className={classes.modal}>
        <h1>A Modal</h1>
        <button className="Button" onClick={closed}>
          Dismiss
        </button>
      </div>
    </CSSTransition>
  );
};

export default Modal;
