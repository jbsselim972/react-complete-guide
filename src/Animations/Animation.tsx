import { FC, useState } from "react";
import List from "./components/List/List";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";

import "./Animation.css";

const Animation: FC = () => {
  const [openModal, setOpenModal] = useState(false);

  const showModal = () => {
    setOpenModal(true);
  };

  const hideModal = () => {
    setOpenModal(false);
  };

  return (
    <div className="App">
      <h1>React Animations</h1>
      <Modal closed={hideModal} show={openModal} />
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
