import { useState, useEffect } from 'react'
import 'dracula-ui/styles/dracula-ui.css'
import toast from 'react-hot-toast'
import Header from './components/Header'
import NavTabs from './components/NavTabs'
import TodoCard from './components/TodoCard'
import AddForm from './components/AddForm'
import Notification from './components/Notification'
import { Box } from 'dracula-ui'

const App = () => {
  const welcomeTodo = { id: 1, text: "Hello! Add your first todo!", isCompleted: false, date: new Date().toISOString().slice(0,10) }

  const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem("todos")) || [welcomeTodo])
  const [ compactView, setCompactView ] = useState(false)
  const [ showAll, setShowAll ] = useState(false)
  const [ filterCompleted, setFilterCompleted ] = useState(false)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const generateId = () => {
    return Math.random().toString(36).substring(2)
  }

  const handleAdd = (text) => {
    const date = new Date()
    const currentDate = date.toISOString().slice(0,10)
    const newTodo = { id: generateId(), text: text, isCompleted: false, date: currentDate }
    const newTodos = [ ...todos, newTodo ]
    setTodos(newTodos)
    toast.success("Added")
  }

  const handleComplete = (id) => {
    const newTodos = [ ...todos ]
    const todo = newTodos.find((todo) => todo.id === id)
    todo.isCompleted = !todo.isCompleted
    setTodos(newTodos)
    todo.isCompleted 
      ? toast.success("Completed", {iconTheme: {primary: "#8aff80", secondary: "#21222c"}, style: {color: "#8aff80"}})
      : toast.success("Restored", {iconTheme: {primary: "#ffff80", secondary: "#21222c"}, style: {color: "#ffff80"}})
  }

  const handleDelete = (id) => {
    const newTodos = [ ...todos ]
    setTodos(newTodos.filter((todo) => todo.id !== id))
    toast.error("Deleted")
  }

  const handleCompactView = () => {
    setCompactView(prev => !prev)
  }

  return (
    <div className="container">
      <Header 
        todos={todos}
        handleCompactView={handleCompactView}
      />
      <NavTabs
        todos={todos}
        setShowAll={setShowAll}
        setFilterCompleted={setFilterCompleted}
      />
      <Box as="main" mt="xs">
        {todos
        .filter(todo => showAll || todo.isCompleted==filterCompleted)
        .map(todo => 
          <TodoCard
            key={todo.id}
            data={todo}
            compactView={compactView}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
          />)}
      </Box>
      <AddForm 
        handleAdd={handleAdd}
      />
      <Notification />
    </div>
  )
}

export default App