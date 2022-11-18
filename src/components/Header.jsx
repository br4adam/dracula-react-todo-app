import { Heading, Box, Switch } from "dracula-ui"

const Header = ({ todos, handleCompactView }) => {

  const incompleteTodos = todos.filter((todo) => todo.isCompleted==false)

  return (
    <Box as="header" display="flex" style={{justifyContent: "space-between", alignItems: "center"}}>
      <Heading color="purpleCyan">
        You have {incompleteTodos.length || "no"} open {incompleteTodos.length === 1 ? "task" : "tasks"}.
      </Heading>
      <Switch
        onClick={handleCompactView}
        color="purple"
        defaultChecked="yes" 
      />
    </Box>
  )
}

export default Header