import { Button, Box, Text } from 'dracula-ui'

const TodoElement = (props) => {
  return (
    <Box display="flex" p="sm" mb="xs" rounded="lg" color={!props.data.isCompleted && "black"}>
      <Box display="flex" pr="md" style={{flexDirection: "column"}}>
        <Text color={props.data.isCompleted ? "blackSecondary" : "purpleCyan"} weight="semibold">{props.data.text}</Text>
        <Text my="xs" color="blackSecondary">{props.data.date}</Text>
      </Box>
      <Box display="flex" style={{justifyContent: "flex-end", alignItems: "center"}}>
        <Button size="sm" mr="xs" color="green" variant="ghost" disabled={props.data.isCompleted ? true : false}
          onClick={() => props.completeTodoFunction(props.index)}>
          Done
        </Button>
        <Button size="sm" color="purple" variant="ghost"
          onClick={() => props.deleteTodoFunction(props.index)}>
          Delete
        </Button>
      </Box>
    </Box>
  )
}

export default TodoElement