import { useState, useEffect } from 'react'
import 'dracula-ui/styles/dracula-ui.css'
import Header from './components/Header'
import NavTabs from './components/NavTabs'
import TodoCard from './components/TodoCard'
import AddForm from './components/AddForm'
import { Box } from 'dracula-ui'

const App = () => {
  const welcomeTodo = { id: 1, text: "Add your first todo!", isCompleted: false, date: "1" }

  const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem("todos")) || [welcomeTodo])
  const [ showDate, setShowDate ] = useState(true)
  const [ showAll, setShowAll ] = useState(true)
  const [ filterCompleted, setFilterCompleted ] = useState(true)

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
  }

  const handleComplete = (id) => {
    const newTodos = [ ...todos ]
    newTodos.find((todo) => todo.id === id).isCompleted = true
    setTodos(newTodos)
  }

  const handleDelete = (id) => {
    const newTodos = [ ...todos ]
    setTodos(newTodos.filter((todo) => todo.id !== id))
  }

  const handleShowDate = () => {
    setShowDate(!showDate)
  }

  return (
    <div className="container">
      <Header 
        todos={todos}
        handleShowDate={handleShowDate}
        />
      <NavTabs
        setShowAll={setShowAll}
        setFilterCompleted={setFilterCompleted}/>
      <Box as="main" mt="xs">
        {todos
        .filter((todo) => showAll || todo.isCompleted==filterCompleted)
        .map((todo) => 
          <TodoCard 
            key={todo.id}
            data={todo}
            showDate={showDate}
            handleComplete={handleComplete}
            handleDelete={handleDelete}
            />)}
      </Box>
      <AddForm handleAdd={handleAdd}/>
    </div>
  )
}

export default App