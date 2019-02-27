import React from 'react'
import { Icon, Menu } from 'semantic-ui-react'

const NavBar = (props) => {
  return(
  <div className="NavBar">
    <Menu icon>
          <button onClick={props.onClick}>Post a BrightSpot!</button>
          <h1>NavBar</h1>
  </Menu>
</div>
  )
}
export default NavBar
