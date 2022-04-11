import { useState } from 'react'

import classes from './../styles/TaskListItem.module.css'
import TaskForm from './TaskForm'

const TaskListItem = ({
  task,
  onChangeTask,
  onDeleteTask,
}) => {
  const [isEditing, setIsEditing] = useState(false)

  const className =
    classes[`priority-${task.priority}`]

  const handleCheckboxChange = (event) => {
    onChangeTask({
      ...task,
      done: event.target.checked,
    })
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleDeleteClick = () => {
    onDeleteTask(task.id)
  }

  const handleEditFormSubmit = ({
    text,
    priority,
  }) => {
    onChangeTask({
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
