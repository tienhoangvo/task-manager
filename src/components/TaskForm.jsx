import { useState, useEffect } from 'react'

import classes from './../styles/TaskForm.module.css'

const TaskForm = ({
  action = 'Add',
  initialTask,
  onSubmit,
}) => {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('')

  const isTextEmpty = text === ''
  const isPriorityEmpty = priority === ''
  const disabledAddButton =
    isTextEmpty || isPriorityEmpty
  const className = classes[action.toLowerCase()]
  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  const handlePriorityChange = (event) => {
    setPriority(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setText('')
    setPriority('')
    onSubmit({ text, priority })
  }

  useEffect(() => {
    if (initialTask) {
      setText(initialTask.text)
      setPriority(initialTask.priority)
    }
  }, [initialTask])

  return (
    <form
      onSubmit={handleSubmit}
      className={className}
    >
      <input
        placeholder={`${action} task`}
        value={text}
        onChange={handleTextChange}
      />{' '}
      <select
        disabled={isTextEmpty}
        value={priority}
        onChange={handlePriorityChange}
      >
        <option value="">Select priority</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>{' '}
      <button disabled={disabledAddButton}>
        {action}
      </button>
    </form>
  )
}

export default TaskForm
