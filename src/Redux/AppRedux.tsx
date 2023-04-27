import React from "react";
import { Provider } from "react-redux";
import ReduxApp from "./Redux";
import store from "./store";

const AppRedux = () => {
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
};

export default AppRedux;
