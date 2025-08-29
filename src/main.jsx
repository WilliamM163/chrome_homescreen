// Importing Libraries
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';

// Importing Components and Functions
import App from './app/App'
import { store, persistor } from './app/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      {/* PersistGate delays rendering until the persisted state is rehydrated */}
      <PersistGate loading={<></>} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
