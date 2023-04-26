import { FormEvent, useRef } from "react";

import classes from "./TaskForm.module.css";

interface TaskFormProps {
  loading: boolean;
  onEnterTask: (task: string) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ loading, onEnterTask }) => {
  const taskInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    const enteredValue = taskInputRef?.current?.value;

    if (enteredValue && enteredValue.trim().length > 0) {
      onEnterTask(enteredValue);
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type="text" ref={taskInputRef} />
      <button>{loading ? "Sending..." : "Add Task"}</button>
    </form>
  );
};

export default TaskForm;
