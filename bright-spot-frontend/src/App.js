import React, { Component } from 'react';
import NavBar from '../src/NavBar'
import MapContainer from '../src/map/MapContainer'
import BrightSpotContainer from '../src/BrightSpot/BrightSpotContainer'
import PostContainer from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/Posts/PostContainer.js'


class App extends Component {

  state = {
    brightSpots: [],
    posts: [],
    currentPost: null
  }

  componentDidMount(){
    fetch('http://localhost:3001/api/v1/bright_spots')
    .then(response => response.json())
    .then(brightSpots => {
      this.setState({
        brightSpots: brightSpots
      })
    })
    fetch('http://localhost:3001/api/v1/posts')
    .then(response => response.json())
    .then(posts => {
      this.setState({
        posts: posts
      })
    })
  }

  onPostClickHandler = (e) => {
    let spotArray = this.state.brightSpots.map(spot =>{
      if (spot.id === parseInt(e.currentTarget.id)){
        this.setState({
          currentPost: spot
        })
      }
    })
  }

  render() {
    return(
      <div className='App'>
        <NavBar
          brightSpots={this.state.brightSpots}
          posts={this.state.posts}
          />
        <MapContainer
          brightSpots={this.state.brightSpots}
          />

        <PostContainer
          brightSpots={this.state.brightSpots}
          posts={this.state.posts}
          onClick={this.onPostClickHandler}
          currentPost={this.state.currentPost}
           />
         <BrightSpotContainer
          currentPost={this.state.currentPost} 
           />
      </div>

  )}
}

export default App;


// if this.state.currentPost ? &&
//   this.state.currentPost === this.state.brightSpots.id {
//     <div>
//       <BrightSpotContainer
//         currentPost={this.state.currentPost}
//         brightSpots={this.state.brightSpots}
//         />
//     </div> }
//       : null
