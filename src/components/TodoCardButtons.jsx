import { Box, Button } from "dracula-ui"
import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

const TodoCardButtons = ({ todo }) => {
  const { completeTodo, deleteTodo } = useContext(TodoContext)
  
  return (
  <Box display="flex">
    <Button size="sm" mr="xs" color="green" variant="ghost" disabled={todo.isCompleted ? true : false}
      onClick={() => completeTodo(todo.id)}>
      Done
    </Button>
    <Button size="sm" color="purple" variant="ghost"
      onClick={() => deleteTodo(todo.id)}>
      Delete
    </Button>
  </Box>
  )
}

export default TodoCardButtons