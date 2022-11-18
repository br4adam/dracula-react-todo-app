import { Box, Button } from "dracula-ui"

const TodoCardButtons = ({ data, handleComplete, handleDelete }) => {
  return (
  <Box display="flex">
    <Button size="sm" mr="xs" color="green" variant="ghost" disabled={data.isCompleted ? true : false}
      onClick={() => handleComplete(data.id)}>
      Done
    </Button>
    <Button size="sm" color="purple" variant="ghost"
      onClick={() => handleDelete(data.id)}>
      Delete
    </Button>
  </Box>
  )
}

export default TodoCardButtons