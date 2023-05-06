import { FC, useState } from "react";

import classes from "./List.module.css";

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
    <li
      key={index}
      className="ListItem"
      onClick={() => removeItemHandler(index)}
    >
      {item}
    </li>
  ));

  return (
    <div>
      <button className={classes.Button} onClick={addItemHandler}>
        Add Item
      </button>
      <p>Click Item to Remove.</p>
      <ul className={classes.List}>{listItems}</ul>
    </div>
  );
};

export default List;
