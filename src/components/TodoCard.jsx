import TodoCardButtons from './TodoCardButtons'
import { Box, Text } from 'dracula-ui'

const TodoElement = ({ data, handleComplete, handleDelete, compactView }) => {

  const cropLongText = (data) => {
    return data.text.length > 90 ? `${data.text.substring(0,90)}...` : data.text
  }

  return (
    <Box 
      onDoubleClick={()=> data.isCompleted && handleComplete(data.id)}
      color={!data.isCompleted && "black"}
      display="flex" p="sm" mb="xs" rounded="lg" as="article">
      <Box display="flex" pr="sm" style={{flexDirection: "column"}}>
        <Text 
          color={data.isCompleted ? "blackSecondary" : "purpleCyan"}>
          {compactView ? cropLongText(data) : data.text}
        </Text>
        <Text 
          mt={!compactView && "xs"} color="blackSecondary">
          {!compactView && data.date}
        </Text>
      </Box>
      <TodoCardButtons 
        handleComplete={handleComplete}
        handleDelete={handleDelete}
        data={data}
      />
    </Box>
  )
}

export default TodoElement