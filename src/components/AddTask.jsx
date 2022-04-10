import { useState } from 'react'

const AddTask = ({ onAddTask }) => {
  const [text, setText] = useState('')
  const [priority, setPriority] = useState('')

  const isTextEmpty = text === ''
  const isPriorityEmpty = priority === ''
  const disabledAddButton =
    isTextEmpty || isPriorityEmpty

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
    onAddTask({ text, priority })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Add task"
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
      <button disabled={disabledAddButton}>Add</button>
    </form>
  )
}

export default AddTask
