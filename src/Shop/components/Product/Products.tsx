import { FC } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

export type Product = { title: string; price: number; description: string };

const Products: FC = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem
          title="Test"
          price={6}
          description="This is a first product - amazing!"
        />
      </ul>
    </section>
  );
};

export default Products;
