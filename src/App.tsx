import React from "react";

import "./App.css";
import Counter from "./Counter/Counter";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
import CourseGoals from "./CourseGoals/CourseGoals";
import LoginPage from "./LoginPage/LoginPage";
import TaskManager from "./TasksManager/TaskManager";
import Redux from "./Redux/Redux";
import { Provider } from "react-redux";
import store from "./Redux/store";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Redux />
    </Provider>
  );
};

export default App;
