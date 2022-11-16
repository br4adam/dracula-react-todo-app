import { Heading, Box, Switch } from "dracula-ui"

const Header = (props) => {

  let incompleteTodos = props.todos.filter((todo) => todo.isCompleted==false)

  return (
    <Box display="flex" style={{justifyContent: "space-between", alignItems: "center"}}>
    <Heading color="purpleCyan">
      You have {incompleteTodos.length} open {incompleteTodos.length > 1 ? "tasks" : "task"}.
    </Heading>
    <Switch onClick={props.filterTodos} color="purple" defaultChecked="yes"></Switch>
    </Box>
  )
}

export default Header