import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useHttp from "../../../shared/hooks/use-http";

const NewTask: React.FC<{ onAddTask: (task: Task) => void }> = ({
  onAddTask,
}) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();

  const createTask = (taskText: string, taskData: any) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, text: taskText };

    onAddTask(createdTask);
  };

  const enterTaskHandler = async (taskText: string) => {
    sendTaskRequest(
      {
        url: import.meta.env.VITE_BACKEND_TASK_URL + "/tasks.json",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: { text: taskText },
      },
      createTask.bind(null, taskText)
    );
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;