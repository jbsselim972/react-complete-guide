import React, { useContext, useState } from "react";

import Expenses from "./components/ExpenseTracker/Expenses/Expenses";
import NewExpense from "./components/ExpenseTracker/NewExpense/NewExpense";
import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./components/CourseGoals/CourseInput/CourseInput";
import MainHeader from "./components/LoginPage/MainHeader/MainHeader";
import Login from "./components/LoginPage/Login/Login";
import Home from "./components/LoginPage/Home/Home";
import AuthContext, {
  AuthContextProvider,
} from "./components/LoginPage/store/auth-context";
import "./App.css";
import ForwardCounter from "./components/Counter/ForwardCounter";
import BackwardCounter from "./components/Counter/BackwardCounter";

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const addExpenseHandler = (expense: Expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

const CourseGoals: React.FC = () => {
  const [courseGoals, setCourseGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const addGoalHandler = (enteredText: string) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = [...prevGoals];
      updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  const deleteItemHandler = (goalId: string) => {
    setCourseGoals((prevGoals) => {
      const updatedGoals = prevGoals.filter((goal) => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No goals found. Maybe add one?</p>
  );

  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseGoals.length > 0 && (
          <CourseGoalList
            items={courseGoals}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

const LoginPage: React.FC = () => {
  const authContext = useContext(AuthContext);

  return (
    <>
      <AuthContextProvider>
        <MainHeader />
        <main>
          <>{console.log(authContext.isLoggedIn)}</>
          {!authContext.isLoggedIn && <Login />}
          {authContext.isLoggedIn && <Home />}
        </main>
      </AuthContextProvider>
    </>
  );
};

const Counter: React.FC = () => {
  return (
    <>
      <ForwardCounter />
      <BackwardCounter />
    </>
  );
};
const App: React.FC = () => {
  return <Counter />;
};

export default App;
