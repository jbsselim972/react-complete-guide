import { FC } from "react";
import CartButton from "../Cart/CartButton";
import classes from "./MainHeader.module.css";

const MainHeader: FC = () => {
  return (
    <header className={classes.header}>
      <h1>ShopCart</h1>
      <nav>
        <ul>
          <li>
            <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
