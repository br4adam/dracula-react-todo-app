import { Heading, Box, Switch } from "dracula-ui"

const Header = ({ todos, filterTodos }) => {

  const incompleteTodos = todos.filter((todo) => todo.isCompleted==false)

  return (
    <Box display="flex" style={{justifyContent: "space-between", alignItems: "center"}}>
    <Heading color="purpleCyan">
      You have {incompleteTodos.length} open {incompleteTodos.length > 1 ? "tasks" : "task"}.
    </Heading>
    <Switch onClick={filterTodos} color="purple" defaultChecked="yes"></Switch>
    </Box>
  )
}

export default Header