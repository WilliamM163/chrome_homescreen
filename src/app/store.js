// Importing Libraries
import { createStore, combineReducers, applyMiddleware } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import { createStateSyncMiddleware, initStateWithPrevTab } from 'redux-state-sync'
import createIndexedDBStorage from 'redux-persist-indexeddb-storage'

// Importing Reducers
import settingsReducer from './features/settings/settingsSlice'
import backgroundReducer from './features/background/backgroundSlice'
import fontReducer from './features/font/fontSlice'
import clockReducer from './features/clock/clockSlice'
import tasksReducer from './features/tasks/tasksSlice'

// Creating rootReducer
const rootReducer = combineReducers(
    {
        showSettingsPanel: settingsReducer,
        backgroundDataURL: backgroundReducer,
        font: fontReducer,
        clock: clockReducer,
        tasks: tasksReducer
    }
)

// Configuration for Redux Persist
const persistConfig = {
    key: 'root',
    storage: createIndexedDBStorage('myIndexedDB', 'myDataStore'), // Use IndexedDB for storage
    // blacklist: [], // uncomment to specify reducers not to persist
};

// Configuration for Redux State Sync
const stateSyncConfig = {};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = createStore(
    persistedReducer,
    applyMiddleware(createStateSyncMiddleware(stateSyncConfig))
);

// Create the Redux persistor
const persistor = persistStore(store, null, () => {
    initStateWithPrevTab(store);
});

export { store, persistor };