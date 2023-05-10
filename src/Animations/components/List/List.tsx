import { FC, useState } from "react";

import classes from "./List.module.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const List: FC = () => {
  const [items, setItems] = useState([1, 2, 3]);
  const addItemHandler = () => {
    setItems((prevState) => {
      return prevState.concat(prevState.length + 1);
    });
  };

  const removeItemHandler = (selIndex: number) => {
    setItems((prevState) => {
      return prevState.filter((_, index) => index !== selIndex);
    });
  };

  const listItems = items.map((item, index) => (
    <CSSTransition
      key={index}
      classNames={{
        enter: classes["item-list-enter"],
        enterActive: classes["item-list-enter-active"],
        exit: classes["item-list-exit"],
        exitActive: classes["item-list-exit-active"],
      }}
      timeout={1000}
    >
      <li className={classes.ListItem} onClick={() => removeItemHandler(index)}>
        {item}
      </li>
    </CSSTransition>
  ));

  return (
    <div>
      <button className="Button" onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <TransitionGroup className={classes.List} component="ul">
        {listItems}
      </TransitionGroup>
    </div>
  );
};

export default List;
