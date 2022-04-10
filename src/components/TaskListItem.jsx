import { useState } from 'react'

import classes from './../styles/TaskListItem.module.css'

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

  const handleSaveClick = () => {
    setIsEditing(false)
  }

  const handleEditInputChange = (event) => {
    onChangeTask({
      ...task,
      text: event.target.value,
    })
  }

  const handlePriorityChange = (event) => {
    onChangeTask({
      ...task,
      priority: event.target.value,
    })
  }

  const handleDeleteClick = () => {
    onDeleteTask(task.id)
  }

  const taskContent = isEditing ? (
    <>
      <input
        value={task.text}
        onChange={handleEditInputChange}
      />{' '}
      <select
        value={task.priority}
        onChange={handlePriorityChange}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>{' '}
      <button onClick={handleSaveClick}>Save</button>
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
