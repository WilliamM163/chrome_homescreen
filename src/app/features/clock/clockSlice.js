import { createSlice } from "@reduxjs/toolkit"

const clockSlice = createSlice({
    name: 'clock',
    initialState: {
        is24Hour: false,
        showsSeconds: false,
        font: null
    },
    reducers: {
        set12Hour(state) {
            state.is24Hour = false
        },
        set24Hour(state) {
            state.is24Hour = true
        },
        enableSeconds(state) {
            state.showsSeconds = true
        },
        disableSeconds(state) {
            state.showsSeconds = false
        },
        changeFont(state, action) {
            state.font = action.payload
        }
    }
})

export const { set12Hour, set24Hour, enableSeconds, disableSeconds, changeFont } = clockSlice.actions
export default clockSlice.reducer