import { useState } from "react"
import { Tabs } from "dracula-ui"
import NavTab from "./NavTab"

const NavTabs = ({ setShowAll, setFilterCompleted }) => {
  const [ activeTab, setActiveTab ] = useState(1)

  const tabs = [
    { id: 1, text: "All", showAll: true},
    { id: 2, text: "Open", showAll: false, filterCompleted: false},
    { id: 3, text: "Completed", showAll: false, filterCompleted: true},
  ]

  return (
    <Tabs color="pink">
    {tabs.map((tab) => 
      <NavTab 
        key={tab.id}
        id={tab.id}
        onClick={() => {
          setShowAll(tab.showAll)
          setFilterCompleted(tab.filterCompleted)
          setActiveTab(tab.id)
        }}
        activeTab={activeTab}
        text={tab.text}
        />
    )}
    </Tabs>
  )
}

export default NavTabs