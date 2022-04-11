import { useTasksContext } from '../contexts/TasksContext'
import TaskListItem from './TaskListItem'

const TaskList = () => {
  const tasks = useTasksContext()

  const listItems = tasks.map((task) => (
    <TaskListItem key={task.id} task={task} />
  ))
  return <ul>{listItems}</ul>
}

export default TaskList
