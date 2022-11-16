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

  const addTodoFunction = (text) => {
    const date = new Date()
    const currentDate = date.toISOString().slice(0,10)
    const newTodo = { text: text, isCompleted: false, date: currentDate}
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const completeTodoFunction = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const deleteTodoFunction = (index) => {
    const newTodos = todos.filter(todo => todo.index !== index)
    // const newTodos = [...todos]
    // newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  const filterTodos = () => {
    setToggle(!toggle)
  }

  return (
    <div className="container">
      <Header 
        todos={todos}
        toggle={toggle}
        filterTodos={filterTodos}/>
      <div className="todo-list" style={{marginTop: "1rem"}}>
        { todos
        .filter((todo) => todo.isCompleted==toggle)
        .map((todo, index) => 
        <TodoElement 
          key={index}
          index={index}
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