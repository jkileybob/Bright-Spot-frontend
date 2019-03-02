import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return(
  <div className="NavBar">
          <Link to="/home">home.</Link>
          <Link to="/map">map.</Link>
          <Link to="/bright-spots">spots.</Link>
          <Link to='/new-post'>create.</Link>
          <h1>BrightSpot</h1>
</div>
  )
}
export default NavBar

 // <Link to="/home">Posts</Link>


 // <button onClick={props.onClickNew}>Post a BrightSpot!</button>
 // <button onClick={props.onClickHome}>Home</button>
 // <button onClick={props.onClickMap}>See the map.</button>
