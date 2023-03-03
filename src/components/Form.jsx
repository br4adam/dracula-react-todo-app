import { useContext, useState } from "react"
import { Input, Button } from "dracula-ui"
import { TodoContext } from "../context/TodoContext"

const Form = () => {
  const [ value, setValue ] = useState("")
  const { addTodo } = useContext(TodoContext)

  const submitForm = (e) => {
    e.preventDefault()
    if (!value) return
    addTodo(value)
    setValue("")
  }

  return (
    <form style={{display: "flex", flexDirection: "row"}} onSubmit={submitForm}>
      <Input mr="xs" borderSize="sm" size="md" color="cyan" type="text" placeholder="Add task"
        value={value} onChange={(e) => {setValue(e.target.value)}} 
      />
      <Button size="md" color="cyan" variant="ghost">+</Button>
    </form>
  )
}

export default Form