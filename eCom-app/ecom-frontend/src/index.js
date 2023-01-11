import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App'
import store, { persistor } from './store'
import { PersistGate } from 'redux-persist/integration/react'

if (window.Cypress) {
  window.store = store
}

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Router>
        <App />
      </Router>
    </PersistGate>
  </Provider>
)