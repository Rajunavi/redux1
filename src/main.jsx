import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

import { Provider } from 'react-redux'
import store from './redux/store/store.js'
import Router from './routes/Routing.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
  
    {/* <App /> */}
    <Router />
    </Provider>,
  </React.StrictMode>,
)
