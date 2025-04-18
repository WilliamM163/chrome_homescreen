import { configureStore } from '@reduxjs/toolkit'

import settingsReducer from './features/settings/settingsSlice'
import backgroundReducer from './features/background/backgroundSlice'
import fontReducer from './features/font/fontSlice'

const store = configureStore({
    reducer: {
        showSettingsPanel: settingsReducer,
        backgroundDataURL: backgroundReducer,
        font: fontReducer
    }
})

export { store }