import { useState } from 'react'

import { useTasksDispatchContext } from '../contexts/TasksContext'
import classes from './../styles/TaskListItem.module.css'
import TaskForm from './TaskForm'

const TaskListItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false)

  const { handleChangeTask, handleDeleteTask } =
    useTasksDispatchContext()

  const className =
    classes[`priority-${task.priority}`]

  const handleCheckboxChange = (event) => {
    handleChangeTask({
      ...task,
      done: event.target.checked,
    })
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleDeleteClick = () => {
    handleDeleteTask(task.id)
  }

  const handleEditFormSubmit = ({
    text,
    priority,
  }) => {
    handleChangeTask({
      ...task,
      priority,
      text,
    })

    setIsEditing(false)
  }

  const taskContent = isEditing ? (
    <>
      <TaskForm
        initialTask={task}
        onSubmit={handleEditFormSubmit}
      />
    </>
  ) : (
    <>
      {task.text}{' '}
      <button onClick={handleEditClick}>Edit</button>
    </>
  )

  return (
    <li className={className}>
      <input
        type="checkbox"
        checked={task.done}
        onChange={handleCheckboxChange}
      />{' '}
      {taskContent}{' '}
      <button onClick={handleDeleteClick}>
        Delete
      </button>
    </li>
  )
}

export default TaskListItem
