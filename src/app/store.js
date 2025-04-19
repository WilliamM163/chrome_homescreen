import { configureStore } from '@reduxjs/toolkit'

import settingsReducer from './features/settings/settingsSlice'
import backgroundReducer from './features/background/backgroundSlice'
import fontReducer from './features/font/fontSlice'
import clockReducer from './features/clock/clockSlice'
import tasksReducer from './features/tasks/tasksSlice'

const store = configureStore({
    reducer: {
        showSettingsPanel: settingsReducer,
        backgroundDataURL: backgroundReducer,
        font: fontReducer,
        clock: clockReducer,
        tasks: tasksReducer
    }
})

export { store }