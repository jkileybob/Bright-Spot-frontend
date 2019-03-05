import React from 'react'
import { Link } from 'react-router-dom'

const BrightSpot = (props) => {


console.log(props)
  return(
    <div className="bright-spot">
      <h1 key={`bright-spot-name-header-${props.spot.id}`}>{props.spot.name}</h1>
      <Link to="/bright-spots">go back.</Link>
      <Link to="/map">see it on the map.</Link>
      <h3 key={`bright-spot-description-${props.spot.id}`}>{props.spot.description}</h3>
      <img src={`${props.spot.posts[0].photo}`}/>


    </div>
  )
}

export default BrightSpot
