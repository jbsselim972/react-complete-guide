import classes from "./TaskItem.module.css";

const TaskItem: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <li className={classes.task}>{children}</li>;
};

export default TaskItem;
