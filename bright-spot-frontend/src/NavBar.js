import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

const NavBar = (props) => {
  return(
  <div className="NavBar">
    <Menu icon>
      <Menu.Item name= 'map'>
      <Icon name='map'/>
      </Menu.Item>
          <h1>NavBar</h1>

  </Menu>
</div>
  )
}
export default NavBar
