import { useContext, useState } from "react"
import { Tabs } from "dracula-ui"
import NavTab from "./NavTab"
import { TodoContext } from "../context/TodoContext"

const NavTabs = ({ setShowAll, setFilterCompleted }) => {
  const [ activeTab, setActiveTab ] = useState(2)
  const { todos } = useContext(TodoContext)

  const tabs = [
    { id: 1, text: "All", showAll: true, count: todos.length },
    { id: 2, text: "Open", showAll: false, filterCompleted: false, count: todos.filter(todo => !todo.isCompleted).length},
    { id: 3, text: "Completed", showAll: false, filterCompleted: true, count: todos.filter(todo => todo.isCompleted).length},
  ]

  const handleClick = (tab) => {
    setShowAll(tab.showAll)
    setFilterCompleted(tab.filterCompleted)
    setActiveTab(tab.id)
  }

  return (
    <Tabs color="pink">
      {tabs.map(tab => 
        <NavTab key={tab.id} id={tab.id} onClick={() => handleClick(tab)} activeTab={activeTab} text={tab.text} count={tab.count} />
      )}
    </Tabs>
  )
}

export default NavTabs