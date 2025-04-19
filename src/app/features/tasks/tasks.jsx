import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCompletion, addTask, removeTask } from './tasksSlice'

import styles from './tasks.module.css'
import completed from './assets/completed.svg'
import uncompleted from './assets/uncompleted.svg'
import bin from './assets/bin.svg'
import { saveTasks } from './tasksFunctions'

function Tasks() {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks)
    const [newTaskString, setNewTaskString] = useState('')

    // Save tasks when tasks are updated
    useEffect(() => {
        console.log(tasks)
        saveTasks(tasks)
    }, [tasks])

    // Task Completion
    const onComplete = (index) => {
        dispatch(toggleCompletion(index))
    }

    // Adding Task
    const onKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleAddTask()
        }
    }

    const handleAddTask = () => {
        if (newTaskString.trim()) {
            dispatch(addTask({
                id: Date.now().toString(), // Simple unique ID
                string: newTaskString,
                completed: false
            }))
            setNewTaskString('') // Clear the input field
        }
    }

    // Deleting Task
    const onDelete = (index) => {
        dispatch(removeTask(index))
    }

    const renderTasks = () => {
        return tasks.map((task, index) => {
            return (
                <div className={styles.task} key={task.id} >
                    <img src={task.completed ? completed : uncompleted} onClick={() => onComplete(index)} />
                    <p className={task.completed ? styles.completed : null}>{task.string}</p>
                    <div style={{ flexGrow: 1 }}></div>
                    <img src={bin} className={styles.bin} onClick={() => onDelete(index)} />
                </div>
            )
        })
    }

    return (
        <div className={styles.container}>
            <h1>Tasks</h1>
            <div>
                {renderTasks()}
            </div>
            <div style={{display: 'block', height: 5}}></div>
            <input
                type="text"
                className={styles.addTaskInput}
                placeholder="Add a new task..."
                value={newTaskString}
                onKeyDown={onKeyDown}
                onChange={(e) => setNewTaskString(e.target.value)}
            />

        </div>
    )
}

export default Tasks