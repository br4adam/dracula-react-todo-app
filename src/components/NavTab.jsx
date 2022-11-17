import { Text } from "dracula-ui"

const NavTab = ({ onClick, id, text, activeTab }) => {
  return (
    <li
      className={id === activeTab ? "drac-tab drac-tab-active" : "drac-tab"}
      onClick={onClick} 
      style={{cursor: "pointer"}}>
      <Text mx="md">{text}</Text>
    </li>
  )
}

export default NavTab