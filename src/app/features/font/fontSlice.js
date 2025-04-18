import { createSlice } from '@reduxjs/toolkit'

const fontSlice = createSlice({
    name: 'font',
    initialState: { "fontFamily": "Monospace", "fontStyle": "Light" },
    reducers: {
        setFont(_, action) {
            return action.payload
        }
    }
})

export const { setFont } = fontSlice.actions
export default fontSlice.reducer