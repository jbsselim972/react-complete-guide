import {
  FC,
  // useContext
} from "react";
// import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import "./ProductItem.css";
import { useStore } from "../../hooks/store";
// import { ProductsContext } from "../../context/products-context";
// import { toggleFav } from "../../store/actions/products";

const ProductItem: FC<Product> = ({ id, title, description, isFavorite }) => {
  const dispatch = useStore()[1];
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
};

export default ProductItem;
