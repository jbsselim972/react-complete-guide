import { useSelector } from "react-redux";
import Counter from "./components/Counter";

import "./Redux.css";
import { RootState } from "../store";
import Auth from "./components/Auth";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function CounterRedux() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuthenticated);
  return (
    <>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />;
    </>
  );
}

export default CounterRedux;
