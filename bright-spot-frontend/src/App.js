import React, { Component } from 'react';
import MapContainer from '../src/map/MapContainer'
import BrightSpotContainer from '../src/BrightSpot/BrightSpotContainer'
class App extends Component {
  render() {
    return(

      <div>
        <MapContainer />
        <BrightSpotContainer />
      </div>

  )}
}

export default App;
