import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  //leo: significa StrictMode que corre en modo desarrolo y corre dos veces 
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
