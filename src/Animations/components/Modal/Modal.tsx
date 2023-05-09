import { FC } from "react";

import classes from "./Modal.module.css";
import { Transition } from "react-transition-group";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const Modal: FC<{ show: boolean; closed: () => void }> = ({ closed, show }) => {
  return (
    <Transition
      mountOnEnter
      unmountOnExit
      in={show}
      timeout={animationTiming}
      onEnter={() => console.log("onEnter")}
      onEntering={() => console.log("onEntering")}
      onEntered={() => console.log("onEntered")}
      onExit={() => console.log("onExit")}
      onExiting={() => console.log("onExiting")}
      onExited={() => console.log("onExited")}
    >
      {(state) => (
        <div
          className={`${classes.modal} 
            ${
              state === "entering"
                ? classes["modal-open"]
                : state === "exiting"
                ? classes["modal-close"]
                : null
            }`}
        >
          <h1>A Modal</h1>
          <button className="Button" onClick={closed}>
            Dismiss
          </button>
        </div>
      )}
    </Transition>
  );
};

export default Modal;
