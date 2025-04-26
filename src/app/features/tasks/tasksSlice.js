import { createSlice } from '@reduxjs/toolkit'

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: [],
    reducers: {
        loadTasks(state, action) {
            return action.payload
        },
        addTask(state, action) {
            state.push(action.payload)
        },
        toggleCompletion(state, action) {
            const i = action.payload
            state[i].completed = !state[i].completed
        },
        removeTask(state, action) {
            return state.filter((_, index) => {
                return index !== action.payload
            })
        },
        moveTask(state, action) {
            const { oldIndex, newIndex } = action.payload;
            const temp = state[newIndex]
            state[newIndex] = state[oldIndex]
            state[oldIndex] = temp
        },
        editTask(state, action) {
            const i = action.payload.index
            state[i] = action.payload.task
        }
    }
})

export const { loadTasks, addTask, toggleCompletion, removeTask, moveTask, editTask } = tasksSlice.actions
export default tasksSlice.reducer