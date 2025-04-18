import { createSlice } from '@reduxjs/toolkit'

const backgroundSlice = createSlice({
    name: 'backgroundDataURL',
    initialState: '',
    reducers: {
        setBackground(_, action) {
            return action.payload
        }
    }
})

export const { setBackground } = backgroundSlice.actions
export default backgroundSlice.reducer