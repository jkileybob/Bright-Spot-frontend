import React from 'react'

const BrightSpot = (props) => {
console.log(props)
  return(
    <div className="bright-spot">
      <h1 key={`bright-spot-name-header-${props.spot.id}`}>{props.spot.name}</h1>
        <img src={props.spot.posts[0]["photo"]} />
      <h3 key={`bright-spot-description-${props.spot.id}`}>{props.spot.description}</h3>
    </div>
  )
}

export default BrightSpot
