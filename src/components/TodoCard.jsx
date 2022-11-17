import TodoCardButtons from './TodoCardButtons'
import { Box, Text } from 'dracula-ui'

const TodoElement = ({ data, handleComplete, handleDelete, showDate }) => {
  return (
    <Box display="flex" p="sm" mb="xs" rounded="lg" as="article" color={!data.isCompleted && "black"}>
      <Box display="flex" pr="md" style={{flexDirection: "column"}}>
        <Text color={data.isCompleted ? "blackSecondary" : "purpleCyan"} weight="semibold">{data.text}</Text>
        <Text mt="xs" color="blackSecondary">{showDate && data.date}</Text>
      </Box>
      <TodoCardButtons 
        handleComplete={handleComplete}
        handleDelete={handleDelete}
        data={data}/>
    </Box>
  )
}

export default TodoElement