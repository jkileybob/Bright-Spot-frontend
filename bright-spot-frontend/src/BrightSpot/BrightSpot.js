import React from 'react'
import { Link } from 'react-router-dom'

const BrightSpot = (props) => {
  return(
    <div className="bright-spot">
      <h1 key={`bright-spot-name-header-${props.spot.id}`}>{props.spot.name}</h1>
      <Link class='link' to="/bright-spots">see more spots.</Link>
      <Link class='link' to="/map">check out the map.</Link>
      <Link class='link' to='/edit-post'>edit.</Link>
      <h3 key={`bright-spot-description-${props.spot.id}`}>{props.spot.description}</h3>
      <img src={`${props.spot.posts[0].photo}`}/>

      <button class='btn' onClick={props.delete}>This Bright Spot is no longer relevant.</button>

    </div>
  )
}

export default BrightSpot
