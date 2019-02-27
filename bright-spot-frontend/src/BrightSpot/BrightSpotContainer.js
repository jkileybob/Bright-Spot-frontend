import React from 'react'
import BrightSpot from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/BrightSpot/BrightSpot.js'

export class BrightSpotContainer extends React.Component {

  render(){
    return (
      this.props.currentPost ?
      <div className='BrightSpotContainer'>
            <BrightSpot
              key={`bright-spot-${this.props.currentPost.id}`}
              spot={this.props.currentPost}
              />
      </div>
      : null
    )
  }
}

export default BrightSpotContainer
