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
      // console.log(brightSpots)
      this.setState({
        brightSpots: brightSpots
      })
    })
    fetch('http://localhost:3001/api/v1/posts')
    .then(response => response.json())
    .then(posts => {
      // console.log(posts)
      this.setState({
        posts: posts
      })
    })
  }


  onPostClickHandler = (e) => {
    // console.log(e.currentTarget.id);
    this.setState({
      currentPost: e.currentTarget.id
    })
  }

  render() {
    return(
      <div className='App'>
        <NavBar />
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
           currentPost={this.props.currentPost}
           /> 
      </div>

  )}
}

export default App;
