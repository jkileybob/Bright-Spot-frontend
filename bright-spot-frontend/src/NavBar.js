import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = (props) => {
  return(
    <div className="NavBar">
      <Link class='link'to="/home">home.</Link>
      <Link class='link' to="/about">about.</Link>
      <Link class='link' to="/map">map.</Link>
      <Link class='link' to="/bright-spots">spots.</Link>
      <Link class='link' to='/new-post'>create.</Link>
      <p>sometimes you need a quick</p>
      <h1 class='logo'>BrightSpot</h1>
    </div>
  )
}
export default NavBar



 // <button onClick={props.onClickNew}>Post a BrightSpot!</button>
 // <button onClick={props.onClickHome}>Home</button>
 // <button onClick={props.onClickMap}>See the map.</button>
