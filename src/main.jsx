import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import App from './app/App'
import { store } from './app/store'

// Restoring state from localStorage
import { restoreState } from './restoreState'
restoreState(store.dispatch)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
)
