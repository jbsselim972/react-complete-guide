import { FC } from "react";
import Navigation from "./components/Nav/Navigation";
import { Route, Routes } from "react-router-dom";
import ProductsPage from "./containers/Products";
import FavoritesPage from "./containers/Favorites";

import "./App.css";

const App: FC = () => {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
