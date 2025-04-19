import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [
        {
            id: '',
            string: 'Put out the washing',
            completed: false
        }
    ],
    reducers: {
        addTask(state, action) {
            state.push(action.payload)
        },
        toggleCompletion(state, action) {
            const i = action.payload
            state[i].completed = !state[i].completed
        },
        removeTask(state, action) {
            state = state.filter(task => {
                return task.id !== action.payload.id
            })
        },
        editTask(state, action) {
            const i = action.payload.index
            state[i] = action.payload.task
        }
    }
})

export const { addTask, toggleCompletion, removeTask, editTask} = tasksSlice.actions
export default tasksSlice.reducer