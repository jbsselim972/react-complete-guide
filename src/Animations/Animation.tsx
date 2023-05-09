import { FC, useState } from "react";
import Transition from "react-transition-group/Transition";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";

import "./Animation.css";

const Animation: FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showBlock, setShowBlock] = useState(false);
  const showModal = () => {
    setOpenModal(true);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <button
        className="Button"
        onClick={() => setShowBlock((prevState) => !prevState)}
      >
        Toggle
      </button>
      <br />
      <Transition in={showBlock} timeout={1000} mountOnEnter unmountOnExit>
        {(state) => (
          <div
            style={{
              backgroundColor: "red",
              width: "100px",
              height: "100px",
              margin: "auto",
              transition: "opacity 1s ease-out",
              opacity: state === "exited" ? 0 : 1,
            }}
          />
        )}
      </Transition>
      <Transition in={openModal} timeout={500} mountOnEnter unmountOnExit>
        {(state) => <Modal closed={hideModal} show={state} />}
      </Transition>
      <Backdrop show={openModal} />
      <button className="Button" onClick={showModal}>
        Open Modal
      </button>
      <h3>Animating Lists</h3>
      <List />
    </div>
  );
};

export default Animation;
