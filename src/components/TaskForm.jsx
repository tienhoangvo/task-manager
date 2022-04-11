import { useState, useEffect } from 'react'

import classes from './../styles/TaskForm.module.css'

const TaskForm = ({ initialTask, onSubmit }) => {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('')

  const isTextEmpty = text === ''
  const isPriorityEmpty = priority === ''
  const disabledAddButton =
    isTextEmpty || isPriorityEmpty

  const action = initialTask
    ? {
        className: 'edit',
        submitName: 'Save',
        type: 'changed',
      }
    : {
        className: 'add',
        submitName: 'Add',
        type: 'added',
      }
  const className = classes[action.className]
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

    onSubmit({
      priority,
      text,
    })
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
        placeholder={`${action.submitName} task`}
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
        {action.submitName}
      </button>
    </form>
  )
}

export default TaskForm
