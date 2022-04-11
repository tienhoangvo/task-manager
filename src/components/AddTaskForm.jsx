import { useTasksDispatchContext } from '../contexts/TasksContext'
import TaskForm from './TaskForm'

const AddTaskForm = () => {
  const { handleAddTask } = useTasksDispatchContext()
  return <TaskForm onSubmit={handleAddTask} />
}

export default AddTaskForm
