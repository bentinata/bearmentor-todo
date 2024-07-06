import { useState } from "react";
import "./App.css"
import { Task, TaskList } from "./Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([{
    title: "Task 0",
    status: "COMPLETED"
  }]);

  function addTask() {
    const newTask: Task = {
      title: `Task ${tasks.length + 1}`,
      status: "CREATED"
    }
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  return (<>
    <button onClick={addTask}>Add task</button>
    <TaskList tasks={tasks} />
  </>
  );
}

export default App;
