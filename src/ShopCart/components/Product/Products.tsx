import { FC } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

export type Product = {
  id: string;
  title: string;
  price: number;
  description?: string;
};
const DUMMY_PRODUCTS: Product[] = [
  {
    id: "p1",
    title: "First Product",
    price: 6,
    description: "This is a first product - amazing!",
  },
  {
    id: "p2",
    title: "Second Product",
    price: 4,
    description: "This is a second product - amazing!",
  },
];

const Products: FC = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem key={product.id} {...product} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
