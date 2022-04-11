import TaskList from '../src/components/TaskList'
import Layout from '../src/components/Layout'
import classes from './../src/styles/Home.module.css'
import { TasksContextProvider } from '../src/contexts/TasksContext'
import AddTaskForm from '../src/components/AddTaskForm'
import TasksSummary from '../src/components/TasksSummary'

const Home = () => {
  return (
    <div className={classes.container}>
      <TasksContextProvider>
        <AddTaskForm />
        <TaskList />
        <TasksSummary />
      </TasksContextProvider>
    </div>
  )
}

Home.getLayout = (page) => {
  return <Layout>{page}</Layout>
}

export default Home
