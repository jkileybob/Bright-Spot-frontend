import React from 'react'

const BrightSpot = (props) => {
console.log(props.currentPost.posts)
  return(
    <div className="bright-spot">
      <h1 key={`bright-spot-name-header-${props.currentPost.id}`}>{props.currentPost.name}</h1>
      <h3 key={`bright-spot-description-${props.currentPost.id}`}>{props.currentPost.description}</h3>
      <button onClick={props.onClickClose}>close.</button>
    </div>
  )
}

export default BrightSpot
