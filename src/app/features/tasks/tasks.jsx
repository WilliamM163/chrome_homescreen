import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toggleCompletion, addTask, removeTask, moveTask } from './tasksSlice'

import completed from './assets/completed.svg'
import uncompleted from './assets/uncompleted.svg'
import up from './assets/up.svg'
import down from './assets/down.svg'
import bin from './assets/bin.svg'

function Tasks() {
    const dispatch = useDispatch()
    const tasks = useSelector((state) => state.tasks)
    const [newTaskString, setNewTaskString] = useState('')

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

    // Task Completion
    const onComplete = (index) => {
        dispatch(toggleCompletion(index))
    }

    // Move Task
    const move = (index, direction) => {
        if (direction === 'UP' && index !== 0) {
            dispatch(moveTask({oldIndex: index, newIndex: index-1}))
        } else if (direction === 'DOWN' && index !== tasks.length-1) {
            dispatch(moveTask({oldIndex: index, newIndex: index+1}))
        }
    }

    // Render Tasks
    const renderTasks = () => {
        if (tasks.length === 0) {
            return <p>No Tasks</p>
        }

        return tasks.map((task, index) => {
            return (
                <div className='task' key={task.id} >
                    <img src={task.completed ? completed : uncompleted} className='button' onClick={() => onComplete(index)} />
                    <p className={task.completed ? 'completed' : null}>{task.string}</p>
                    <div style={{ flexGrow: 1 }}></div>
                    <img src={up} className='button fade' onClick={() => move(index, 'UP')} />
                    <img src={down} className='button fade' onClick={() => move(index, 'DOWN')} />
                    <img src={bin} className='button fade' onClick={() => onDelete(index)} />
                </div>
            )
        })
    }

    return (
        <div className='widget_container'>
            <h1>Tasks</h1>
            <div>
                {renderTasks()}
            </div>
            <div style={{display: 'block', height: 5}}></div>
            <input
                type="text"
                className='addTaskInput'
                placeholder="Add a new task..."
                value={newTaskString}
                onKeyDown={onKeyDown}
                onChange={(e) => setNewTaskString(e.target.value)}
            />

        </div>
    )
}

export default Tasks