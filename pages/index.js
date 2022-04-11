import { useState } from 'react'

import TaskList from '../src/components/TaskList'
import Layout from '../src/components/Layout'

import classes from './../src/styles/Home.module.css'
import initialTasks from '../src/data/initialTasks'
import TaskForm from '../src/components/TaskForm'

const Home = () => {
  const [tasks, setTasks] = useState(initialTasks)

  const handleAddTask = ({ text, priority }) => {
    const newTask = {
      id: new Date().getTime(),
      text,
      priority,
      done: false,
    }

    setTasks([...tasks, newTask])
  }

  const doneAmount = tasks.filter(
    (task) => task.done
  ).length

  const total = tasks.length

  const handleDeleteTask = (taskId) => {
    setTasks(
      tasks.filter((task) => task.id !== taskId)
    )
  }

  const handleChangeTask = (task) => {
    setTasks(
      tasks.map((t) => (t.id === task.id ? task : t))
    )
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
