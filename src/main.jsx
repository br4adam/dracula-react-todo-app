import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './style.css'
import { TodoProvider } from './context/TodoContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <TodoProvider>
    <App />
  </TodoProvider>
)