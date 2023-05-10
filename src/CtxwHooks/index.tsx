import { FC } from "react";
// import { Provider } from "react-redux";
// import store from "./store";
import { BrowserRouter } from "react-router-dom";
// import ProductsProvider from "./context/products-context";
import App from "./App";
import configureProductsStore from "./hooks/products-store";

configureProductsStore();
const CtxwHooks: FC = () => {
  return (
    // <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    // </ProductsProvider>
  );
};

export default CtxwHooks;
