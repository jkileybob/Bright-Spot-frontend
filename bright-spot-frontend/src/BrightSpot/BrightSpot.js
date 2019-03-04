import React from 'react'

const BrightSpot = (props) => {
console.log(props)
  return(
    <div className="bright-spot">
      <h1 key={`bright-spot-name-header-${props.currentPost.id}`}>{props.currentPost.name}</h1>
        <img src={props.currentPost.photo} />
      <h3 key={`bright-spot-description-${props.currentPost.id}`}>{props.currentPost.description}</h3>
    </div>
  )
}

export default BrightSpot
