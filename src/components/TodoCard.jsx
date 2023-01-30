import TodoCardButtons from './TodoCardButtons'
import cropLongText from '../utils/cropLongText'
import { Box, Text } from 'dracula-ui'

const TodoElement = ({ data, handleComplete, handleDelete, compactView }) => {
  return (
    <Box 
      onDoubleClick={() => data.isCompleted && handleComplete(data.id)}
      color={!data.isCompleted && "black"}
      display="flex" p="sm" mb="xs" rounded="lg" as="article">
      <Box display="flex" pr="sm" style={{flexDirection: "column"}}>
        <Text 
          color={data.isCompleted ? "blackSecondary" : "purpleCyan"}
          style={{wordBreak: "break-all"}}>
          {compactView ? cropLongText(data.text) : data.text}
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