import { useState } from "react";
import "./App.css";
import { Task, TaskList } from "./Task";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      title: "Task 0",
      status: "COMPLETED",
    },
  ]);
  const [search, setSearch] = useState("");

  function addTask() {
    const newTask: Task = {
      title: `Task ${tasks.length + 1}`,
      status: "CREATED",
    };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  }

  function filterTask() {
    return tasks.filter((task) => task.title.includes(search));
  }

  function deleteTask(deletedTitle: string) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.title !== deletedTitle),
    );
  }

  function completeTask(completedTitle: string) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.title === completedTitle ? { ...task, status: "COMPLETED" } : task,
      ),
    );
  }

  return (
    <>
      <input
        placeholder="Input task name"
        onChange={(e) => setSearch(e.target.value)}
      ></input>
      <button onClick={addTask}>Add task</button>
      <TaskList
        tasks={filterTask()}
        onDelete={deleteTask}
        onCompleted={completeTask}
      />
    </>
  );
}

export default App;
