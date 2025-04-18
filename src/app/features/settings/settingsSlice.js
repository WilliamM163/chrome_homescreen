import { createSlice } from '@reduxjs/toolkit'

const settingsSlice = createSlice({
    name: 'showSettingsPanel',
    initialState: false,
    reducers: {
        openSettings() {
            return true
        },
        closeSettings() {
            return false
        }
    }
})

export const { openSettings, closeSettings } = settingsSlice.actions
export default settingsSlice.reducer