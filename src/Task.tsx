export interface Task {
  title: string;
  status: 'CREATED' | 'COMPLETED'
}

interface TaskOverviewProps {
  task: Task
}

export function TaskOverview({ task }: TaskOverviewProps) {
  return (<div>{task.title}{task.status}</div>)
}

export function TaskList({ tasks}: { tasks: Task[]}) {
  return tasks.map(task => <TaskOverview task={task} />)
}
