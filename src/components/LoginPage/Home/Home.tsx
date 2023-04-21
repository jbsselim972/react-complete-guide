import React, { useContext } from "react";

import Card from "../../UI/Card";
import Button from "../UI/Button";
import classes from "./Home.module.css";
import AuthContext from "../store/auth-context";

const Home: React.FC = () => {
  const authContext = useContext(AuthContext);
  return (
    <Card className={classes.home}>
      <h1>Welcome back!</h1>
      <Button onClick={authContext.onLogout}>
        <h1>Logout</h1>
      </Button>
    </Card>
  );
};

export default Home;
