import TodoCardButtons from './TodoCardButtons'
import { Box, Text } from 'dracula-ui'

const TodoElement = ({ data, handleComplete, handleDelete, showMore }) => {

  const cropLongText = (data) => {
    return data.text.length > 90 ? `${data.text.substring(0,90)}...` : data.text
  }

  return (
    <Box display="flex" p="sm" mb="xs" rounded="lg" as="article" color={!data.isCompleted && "black"}>
      <Box display="flex" pr="sm" style={{flexDirection: "column"}}>
        <Text color={data.isCompleted ? "blackSecondary" : "purpleCyan"} weight="semibold">
          {showMore ? data.text : cropLongText(data)}
        </Text>
        <Text mt="xs" color="blackSecondary">{showMore && data.date}</Text>
      </Box>
      <TodoCardButtons 
        handleComplete={handleComplete}
        handleDelete={handleDelete}
        data={data}/>
    </Box>
  )
}

export default TodoElement