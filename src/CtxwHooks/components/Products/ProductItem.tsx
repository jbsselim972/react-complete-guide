import { FC } from "react";
import { useDispatch } from "react-redux";

import Card from "../UI/Card";
import "./ProductItem.css";
import { toggleFav } from "../../store/actions/products";

const ProductItem: FC<Product> = ({ id, title, description, isFavorite }) => {
  const dispatch = useDispatch();

  const toggleFavHandler = () => {
    dispatch(toggleFav(id));
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
