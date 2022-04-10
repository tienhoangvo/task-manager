import TaskListItem from './TaskListItem'

const TaskList = ({
  tasks = [],
  onDeleteTask,
  onChangeTask,
}) => {
  const listItems = tasks.map((task) => (
    <TaskListItem
      key={task.id}
      task={task}
      onDeleteTask={onDeleteTask}
      onChangeTask={onChangeTask}
    />
  ))
  return <ul>{listItems}</ul>
}

export default TaskList
