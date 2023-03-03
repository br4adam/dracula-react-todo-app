import { createContext, useState, useEffect } from "react"
import toast from 'react-hot-toast'
import createId from '../utils/createId'

export const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const firstTodo = { id: 1, text: "Hello! Add your first todo!", isCompleted: false, date: new Date().toISOString().slice(0,10) }
  const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem("todos")) || [firstTodo])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = (text) => {
    const currentDate = new Date().toISOString().slice(0,10)
    const newTodo = { id: createId(), text: text, isCompleted: false, date: currentDate }
    setTodos([ ...todos, newTodo ])
    toast.success("Added")
  }

  const completeTodo = (id) => {
    const newTodos = [ ...todos ]
    const todo = newTodos.find(todo => todo.id === id)
    todo.isCompleted = !todo.isCompleted
    setTodos(newTodos)
    todo.isCompleted 
      ? toast.success("Completed", {iconTheme: {primary: "#8aff80", secondary: "#21222c"}, style: {color: "#8aff80"}})
      : toast.success("Restored", {iconTheme: {primary: "#ffff80", secondary: "#21222c"}, style: {color: "#ffff80"}})
  }

  const deleteTodo = (id) => {
    const newTodos = [ ...todos ]
    setTodos(newTodos.filter(todo => todo.id !== id))
    toast.error("Deleted")
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, completeTodo, deleteTodo }}>
      { children }
    </TodoContext.Provider>
  )
}