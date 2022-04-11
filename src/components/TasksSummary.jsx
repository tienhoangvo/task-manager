import { useTasksContext } from '../contexts/TasksContext'

const TasksSummary = () => {
  const tasks = useTasksContext()
  const doneAmount = tasks.filter(
    (task) => task.done
  ).length

  const total = tasks.length
  return (
    <p>
      <strong>{doneAmount} done</strong> out of {total}{' '}
      tasks
    </p>
  )
}

export default TasksSummary
