import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";
import "./CourseGoalList.css";

interface CourseGoalListProps {
  items: { id: string; text: string }[];
  onDeleteItem: (id: string) => void;
}

const CourseGoalList: React.FC<CourseGoalListProps> = ({
  items,
  onDeleteItem,
}) => {
  return (
    <ul className="goal-list">
      {items.map((goal) => (
        <CourseGoalItem key={goal.id} id={goal.id} onDelete={onDeleteItem}>
          {goal.text}
        </CourseGoalItem>
      ))}
    </ul>
  );
};

export default CourseGoalList;
