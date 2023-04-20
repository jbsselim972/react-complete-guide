import React from "react";

import classes from "./Navigation.module.css";

const Navigation: React.FC<Auth> = ({ isAuthenticated, onLogout }) => {
  return (
    <nav className={classes.nav}>
      <ul>
        {isAuthenticated && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {isAuthenticated && (
          <li>
            <button onClick={onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
