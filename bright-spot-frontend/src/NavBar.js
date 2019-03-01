
import React from 'react'

const NavBar = (props) => {
  return(
  <div className="NavBar">
          <button onClick={props.onClick}>Post a BrightSpot!</button>
          <h1>BrightSpot</h1>
</div>
  )
}
export default NavBar
