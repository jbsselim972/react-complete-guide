import React from "react";

import Card from "../../UI/Card";
import Button from "../UI/Button";
import classes from "./Home.module.css";

const Home: React.FC<{ onLogout: () => void }> = ({ onLogout }) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={onLogout}>
        <h1>Logout</h1>
      </Button>
    </Card>
  );
};

export default Home;
