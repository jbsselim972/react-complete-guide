import {
  FC,
  memo,
  // useContext
} from "react";
// import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import "./ProductItem.css";
import { useStore } from "../../hooks/store";
// import { ProductsContext } from "../../context/products-context";
// import { toggleFav } from "../../store/actions/products";

const ProductItem: FC<Product> = memo(
  ({ id, title, description, isFavorite }) => {
    console.log("render");
    const dispatch = useStore(false)[1];
    // const toggleFav = useContext(ProductsContext).toggleFav;
    // const dispatch = useDispatch();

    const toggleFavHandler = () => {
      // toggleFav(id);
      dispatch("TOGGLE_FAV", id);
    };

    return (
      <Card style={{ marginBottom: "1rem" }}>
        <div className="product-item">
          <h2 className={isFavorite ? "is-fav" : ""}>{title}</h2>
          <p>{description}</p>
          <button
            className={!isFavorite ? "button-outline" : ""}
            onClick={toggleFavHandler}
          >
            {isFavorite ? "Un-Favorite" : "Favorite"}
          </button>
        </div>
      </Card>
    );
  }
);

export default ProductItem;
