import TodoCardButtons from './TodoCardButtons'
import cropLongText from '../utils/cropLongText'
import { Box, Text } from 'dracula-ui'
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

const TodoElement = ({ todo, compactView }) => {
  const { completeTodo } = useContext(TodoContext)

  return (
    <Box 
      onDoubleClick={() => todo.isCompleted && completeTodo(todo.id)}
      color={!todo.isCompleted && "black"}
      display="flex" p="sm" mb="xs" rounded="lg" as="article">
      <Box display="flex" pr="sm" style={{flexDirection: "column"}}>
        <Text color={todo.isCompleted ? "blackSecondary" : "purpleCyan"} style={{wordBreak: "break-all"}}>
          {compactView ? cropLongText(todo.text) : todo.text}
        </Text>
        <Text mt={!compactView && "xs"} color="blackSecondary">
          {!compactView && todo.date}
        </Text>
      </Box>
      <TodoCardButtons todo={todo} />
    </Box>
  )
}

export default TodoElement