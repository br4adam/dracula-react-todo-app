import { Text } from "dracula-ui"

const NavTab = ({ onClick, id, text, count, activeTab }) => {
  return (
    <li
      className={id === activeTab ? "drac-tab drac-tab-active" : "drac-tab"}
      onClick={onClick} 
      style={{cursor: "pointer"}}>
      <Text mx="md">
        {text}
        <Text as="span" pl="xs" color="blackSecondary">
          ({count})
        </Text>
      </Text>
    </li>
  )
}

export default NavTab