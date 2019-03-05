import React from 'react'
import { Link } from 'react-router-dom'

const BrightSpot = (props) => {

console.log(props)

  return(
    <div className="bright-spot">
      <h1 key={`bright-spot-name-header-${props.currentPost.id}`}>{props.currentPost.name}</h1>
      <h3 key={`bright-spot-description-${props.currentPost.id}`}>{props.currentPost.description}</h3>
      <Link to="/bright-spots">go back.</Link>
      <Link to="/map">see it on the map.</Link>

    </div>
  )
}

export default BrightSpot

//need to pull img form object:
// <img src={props.currentPost.posts} />
