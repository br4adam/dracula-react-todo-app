import { useState } from "react"
import { Input, Button } from "dracula-ui"

const AddForm = (props) => {
  const [ value, setValue ] = useState("")

  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (!value) {
        return
      }
      props.addTodoFunction(value)
      setValue("")
      }}>
      <Input mr="xs" borderSize="sm" size="md" color="cyan"
        type="text" 
        placeholder="Add task"
        value={value}
        onChange={(e) => {setValue(e.target.value)}}
        />
      <Button size="md" color="cyan" variant="ghost">Save</Button>
    </form>
  )
}

export default AddForm