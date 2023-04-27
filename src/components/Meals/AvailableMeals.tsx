import React, { useState, useEffect } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import useHttp from "../../hooks/useHttp";

const AvailableMeals: React.FC = () => {
  const { isLoading, error, sendRequest } = useHttp();
  const [meals, setMeals] = useState<Meal[]>([]);

  const applyData = (data: any) => {
    const returnData = [];
    for (const key in data) {
      returnData.push({
        id: key,
        name: data[key].name,
        description: data[key].description,
        price: data[key].price,
      });
    }
    setMeals(returnData);
  };

  useEffect(() => {
    const fetchMeals = async () => {
      await sendRequest(
        { url: import.meta.env.VITE_BACKEND_URL + "/meals.json" },
        applyData
      );
    };

    fetchMeals();
  }, []);

  const mealsList = meals.map((meal) => <MealItem {...meal} key={meal.id} />);

  return (
    <section className={classes.meals}>
      {isLoading && <p className={classes["meals-loading"]}>Loading...</p>}
      {!isLoading && error && (
        <section className={classes["meals-error"]}>
          <p>{error}</p>
        </section>
      )}
      {!isLoading && !error && (
        <Card>
          <ul>{mealsList}</ul>
        </Card>
      )}
    </section>
  );
};

export default AvailableMeals;
