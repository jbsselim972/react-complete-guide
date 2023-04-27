import React from "react";

import "./App.css";
import Counter from "./Counter/Counter";
import ExpenseTracker from "./ExpenseTracker/ExpenseTracker";
import CourseGoals from "./CourseGoals/CourseGoals";
import LoginPage from "./LoginPage/LoginPage";
import TaskManager from "./TasksManager/TaskManager";
import CounterRedux from "./CounterRedux/CounterRedux";

const App: React.FC = () => {
  return <CounterRedux />;
};

export default App;
