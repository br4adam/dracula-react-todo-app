import { Button, Box, Text } from 'dracula-ui'

const TodoElement = ({ data, completeTodoFunction, deleteTodoFunction }) => {
  return (
    <Box display="flex" p="sm" mb="xs" rounded="lg" color={!data.isCompleted && "black"}>
      <Box display="flex" pr="md" style={{flexDirection: "column"}}>
        <Text color={data.isCompleted ? "blackSecondary" : "purpleCyan"} weight="semibold">{data.text}</Text>
        <Text my="xs" color="blackSecondary">{data.date}</Text>
      </Box>
      <Box display="flex" style={{justifyContent: "flex-end", alignItems: "center"}}>
        <Button size="sm" mr="xs" color="green" variant="ghost" disabled={data.isCompleted ? true : false}
          onClick={() => completeTodoFunction(data.id)}>
          Done
        </Button>
        <Button size="sm" color="purple" variant="ghost"
          onClick={() => deleteTodoFunction(data.id)}>
          Delete
        </Button>
      </Box>
    </Box>
  )
}

export default TodoElement