function saveTasks(tasks) {
    const tasksJSON = JSON.stringify(tasks)
    localStorage.setItem('tasks', tasksJSON)
}

function fetchTasks() {
    const tasksJSON = localStorage.getItem('tasks')
    const tasks = JSON.parse(tasksJSON)
    return tasks ? tasks : []
}

export { saveTasks, fetchTasks }