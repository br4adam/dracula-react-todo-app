import { useState, useEffect } from 'react'
import 'dracula-ui/styles/dracula-ui.css'
import TodoElement from './components/TodoElement'
import AddForm from './components/AddForm'
import Header from './components/Header'

const App = () => {

  const [ todos, setTodos ] = useState(JSON.parse(localStorage.getItem("todos")) || [])
  const [ toggle, setToggle ] = useState(false)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  const generateId = () => {
    return Math.random().toString(36).substring(2)
  }

  const addTodoFunction = (text) => {
    const id = generateId()
    const date = new Date()
    const currentDate = date.toISOString().slice(0,10)
    const newTodo = { id: id, text: text, isCompleted: false, date: currentDate }
    const newTodos = [ ...todos, newTodo ]
    setTodos(newTodos)
  }

  const completeTodoFunction = (id) => {
    const newTodos = [ ...todos ]
    newTodos.find((todo) => todo.id === id).isCompleted = true
    setTodos(newTodos)
  }

  const deleteTodoFunction = (id) => {
    const newTodos = [ ...todos ]
    setTodos(newTodos.filter((todo) => todo.id !== id))
  }

  const filterTodos = () => {
    setToggle(!toggle)
  }

  return (
    <div className="container">
      <Header 
        todos={todos}
        filterTodos={filterTodos}/>
      <div className="todo-list" style={{marginTop: "1rem"}}>
        {todos
        .filter((todo) => todo.isCompleted==toggle)
        .map((todo) => 
        <TodoElement 
          key={todo.id}
          data={todo}
          completeTodoFunction={completeTodoFunction}
          deleteTodoFunction={deleteTodoFunction}
          />)}
      </div>
      <AddForm addTodoFunction={addTodoFunction}/>
    </div>
  )
}

export default App