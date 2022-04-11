import {
  createContext,
  useContext,
  useReducer,
} from 'react'

import initialTasks from '../data/initialTasks'
import tasksReducer from '../reducers/tasksReducer'

export const TasksContext = createContext()
export const TasksDispatchContext = createContext()

export const useTasksContext = () => {
  const context = useContext(TasksContext)

  if (typeof context === 'undefined') {
    throw Error(
      'useTasksContext must be used within either the TasksContextProvider or TasksContext.Provider'
    )
  }

  return context
}

export const useTasksDispatchContext = () => {
  const context = useContext(TasksDispatchContext)

  if (typeof context === 'undefined') {
    throw Error(
      'useTasksDispatchContext must be used within either the TasksContextProvider or TasksDispatchContext.Provider'
    )
  }

  return context
}

export const TasksContextProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  )

  const handleAddTask = ({ text, priority }) => {
    dispatch({
      type: 'added',
      id: new Date().getTime(),
      text,
      priority,
    })
  }

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: 'deleted',
      id: taskId,
    })
  }

  const handleChangeTask = (task) => {
    dispatch({
      type: 'changed',
      task,
    })
  }

  return (
    <TasksContext.Provider value={tasks}>
      <TasksDispatchContext.Provider
        value={{
          handleAddTask,
          handleChangeTask,
          handleDeleteTask,
        }}
      >
        {children}
      </TasksDispatchContext.Provider>
    </TasksContext.Provider>
  )
}
