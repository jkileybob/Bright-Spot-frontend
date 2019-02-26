import React, { Component } from 'react';
import NavBar from '../src/NavBar'
import MapContainer from '../src/map/MapContainer'
import BrightSpotContainer from '../src/BrightSpot/BrightSpotContainer'


class App extends Component {

  state = {
    brightSpotMarkers: [],
    allPosts: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/bright_spots')
    .then(response => response.json())
    .then(brightSpots => {
      // console.log(brightSpots)
      this.setState({
        brightSpotMarkers: brightSpots
      })
    })
    fetch('http://localhost:3001/api/v1/posts')
    .then(response => response.json())
    .then(posts => {
      console.log(posts)
      this.setState({
        allPosts: posts
      })
    })
  }

  render() {
    return(

      <div className='App'>
        <NavBar />
        <MapContainer />
        <BrightSpotContainer />
      </div>

  )}
}

export default App;
