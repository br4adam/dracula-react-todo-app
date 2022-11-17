import { useState } from "react"
import { Input, Button } from "dracula-ui"

const AddForm = ({ handleAdd }) => {
  const [ value, setValue ] = useState("")

  return (
    <form 
      style={{display: "flex", flexDirection: "row"}} 
      onSubmit={(e) => {
        e.preventDefault()
        if (!value) return
        handleAdd(value)
        setValue("")
      }}>
      <Input mr="xs" borderSize="sm" size="md" color="cyan"
        type="text" 
        placeholder="Add task"
        value={value}
        onChange={(e) => {setValue(e.target.value)}}
        />
      <Button size="md" color="cyan" variant="ghost">+</Button>
    </form>
  )
}

export default AddForm