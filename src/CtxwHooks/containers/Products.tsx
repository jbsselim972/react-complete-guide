import { FC } from "react";
import { useSelector } from "react-redux";

import ProductItem from "../components/Products/ProductItem";
import "./Products.css";
import { RootState } from "../store";

const Products: FC<Product> = ({ id, title, description, isFavorite }) => {
  const productList = useSelector<RootState, Product[]>(
    (state) => state.shop.products
  );
  return (
    <ul className="products-list">
      {productList.map((prod) => (
        <ProductItem
          key={prod.id}
          id={prod.id}
          title={prod.title}
          description={prod.description}
          isFavorite={prod.isFavorite}
        />
      ))}
    </ul>
  );
};

export default Products;
