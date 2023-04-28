import React, { useEffect, useState } from "react";
import useHttp from "../shared/hooks/use-http";
import NewTask from "./components/NewTask/NewTask";
import Tasks from "./components/Tasks/Tasks";

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp();

  useEffect(() => {
    const transformTasks = (tasksObj: Task[]) => {
      const loadedTasks = [];

      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
      }

      setTasks(loadedTasks);
    };

    fetchTasks(
      { url: import.meta.env.VITE_BACKEND_TASK_URL + "/tasks.json" },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task: Task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
};

export default TaskManager;
