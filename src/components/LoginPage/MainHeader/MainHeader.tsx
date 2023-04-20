import React from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";

interface Auth {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const MainHeader: React.FC<Auth> = ({ isAuthenticated, onLogout }) => {
  return (
    <header className={classes["main-header"]}>
      <h1>A Typical Page</h1>
      <Navigation isAuthenticated={isAuthenticated} onLogout={onLogout} />
    </header>
  );
};

export default MainHeader;
