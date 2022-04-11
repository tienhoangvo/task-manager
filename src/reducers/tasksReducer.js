const tasksReducer = (tasks, action) => {
  switch (action.type) {
    case 'added': {
      const { id, text, priority } = action
      return [
        ...tasks,
        {
          id,
          text,
          priority,
          done: false,
        },
      ]
    }

    case 'changed': {
      const { task } = action

      return tasks.map((t) =>
        t.id === task.id ? task : t
      )
    }

    case 'deleted': {
      const { id } = action

      return tasks.filter((t) => t.id !== id)
    }

    default: {
      throw Error('Unknow action: ', action.type)
    }
  }
}

export default tasksReducer
