import React from 'react'
import BrightSpot from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/BrightSpot/BrightSpot.js'

export class BrightSpotContainer extends React.Component {

  render(){
    return (
      <div className='BrightSpotContainer'>
      </div>
    )
  }
}

export default BrightSpotContainer



// {this.props.brightSpots.map(spot =>
//   <BrightSpot
//     key={spot.name}
//     id={spot.id}
//     brightSpots={spot}
//     posts={this.props.posts}
//     onSpotClick={this.props.onSpotClick}
//     />
//
// )}
