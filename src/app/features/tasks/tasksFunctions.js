function saveTasks(tasks) {
    const tasksJSON = JSON.stringify(tasks)
    localStorage.setItem('tasks', tasksJSON)
}

function fetchTasks() {
    const tasksJSON = localStorage.getItem('tasks')
    return JSON.parse(tasksJSON)
}

export { saveTasks, fetchTasks }