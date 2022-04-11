import { useReducer } from 'react'

import TaskList from '../src/components/TaskList'
import Layout from '../src/components/Layout'

import classes from './../src/styles/Home.module.css'
import initialTasks from '../src/data/initialTasks'
import TaskForm from '../src/components/TaskForm'
import tasksReducer from '../src/reducers/tasksReducer'

const Home = () => {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  )

  const doneAmount = tasks.filter(
    (task) => task.done
  ).length

  const total = tasks.length

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
    <div className={classes.container}>
      <TaskForm onSubmit={handleAddTask} />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onChangeTask={handleChangeTask}
      />
      <p>
        <strong>{doneAmount} done</strong> out of{' '}
        {total} tasks
      </p>
    </div>
  )
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Home
