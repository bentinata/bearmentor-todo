export interface Task {
  title: string;
  status: "CREATED" | "COMPLETED";
}

interface TaskOverviewProps {
  task: Task;
  onDelete: Function;
  onCompleted: Function;
}

export function TaskOverview({
  task,
  onDelete,
  onCompleted,
}: TaskOverviewProps) {
  return (
    <div className="container mx-auto border p-4 m-5 rounded-2xl shadow-lg">
      <h1 className="text-base">{task.title}</h1>
      <span className="text-sm">{task.status}</span>
      <button onClick={() => onDelete(task.title)}>Delete</button>
      <button onClick={() => onCompleted(task.title)}>Complete</button>
    </div>
  );
}

export function TaskList({
  tasks,
  onDelete,
  onCompleted,
}: {
  tasks: Task[];
  onDelete: Function;
  onCompleted: Function;
}) {
  return tasks.map((task, id) => (
    <TaskOverview
      key={id}
      task={task}
      onDelete={onDelete}
      onCompleted={onCompleted}
    />
  ));
}
