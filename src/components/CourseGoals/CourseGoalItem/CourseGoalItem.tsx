import React from "react";

import "./CourseGoalItem.css";

interface CourseGoalItemProps {
  id: string;
  onDelete: (id: string) => void;
  children: React.ReactNode;
}

const CourseGoalItem: React.FC<CourseGoalItemProps> = ({
  onDelete,
  id,
  children,
}) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    onDelete(id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {children}
    </li>
  );
};

export default CourseGoalItem;
