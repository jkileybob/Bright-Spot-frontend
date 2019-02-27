import React from 'react'
import BrightSpot from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/BrightSpot/BrightSpot.js'

export class BrightSpotContainer extends React.Component {

  render(){
    return (
      <div className='BrightSpotContainer'>
        
        {this.props.brightSpots.map(spot =>{
          if (spot.id === this.props.currentPost){
            return (
              <BrightSpot
                key={`bright-spot-${spot.id}`}
                spot={spot}
                />
            )}
          }
       )}
      </div>
    )
  }
}

export default BrightSpotContainer
