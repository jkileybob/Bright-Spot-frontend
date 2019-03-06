import React from 'react'
import { Link } from 'react-router-dom'

const BrightSpot = (props) => {


// console.log(props)
  return(
    <div className="bright-spot">
      <h1 key={`bright-spot-name-header-${props.spot.id}`}>{props.spot.name}</h1>
      <Link to="/bright-spots">see more spots.</Link>
      <Link to="/map">check out the map.</Link>
      <Link to='/edit-post'>edit.</Link>
      <h3 key={`bright-spot-description-${props.spot.id}`}>{props.spot.description}</h3>
      <img src={`${props.spot.posts[0].photo}`}/>
    </div>
  )
}

export default BrightSpot
