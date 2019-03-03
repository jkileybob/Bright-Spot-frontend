import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import '../src/App.css'
import NavBar from '../src/NavBar'
import Home from '../src/Home'
import About from '../src/About'
import BrightSpot from '../src/BrightSpot/BrightSpot'
import BrightSpotContainer from '../src/BrightSpot/BrightSpotContainer'
import PostContainer from '../src/Posts/PostContainer.js'
import Post from '../src/Posts/Post.js'
import NewPostForm from '../src/Posts/NewPostForm.js'
import RealMap from '../src/map/RealMap.js'


class App extends Component {

  // STATE:
  state = {
    brightSpots: [],      //all spots
    posts: [],            //all posts
    currentPost: null,    //selected post

    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},

    selectedFile: null,   //photo upload selector status
    postNameInput: '',    //controlled form states
    postDescrInput: ''    //for new post form
  }


  // FETCH:
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
    this.state.brightSpots.map(spot =>{
      if (spot.id === parseInt(e.currentTarget.id)){
        this.setState({
          currentPost: spot
        })
      }
    })
  }

  onMarkerClickHandler = (props, marker, e) => {
    console.log(e.spot)
    this.setState({
      currentPost: e.spot,
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  // FORM STUFF:
  nameHandler = (e) => {
    this.setState({
      postNameInput: e.target.value
    })
  }
  descriptionHandler = (e) => {
    this.setState({
      postDescrInput: e.target.value
    })
  }

  fileSelectHandler = (e) => {
    // console.log(e.target.files[0])
    this.setState({
      selectedFile: e.target.files[0]
    })
  }

  // fileUploadHandler = (e) => {
  //   e.preventDefault();
  //   const fileData = new FormData();
  //   fileData.append('image', this.state.selectedFile, this.state.selectedFile)
  //
  //   // fetch() post to  backend
  // }

  //will fetch post data to backend
  submitPostFormHandler = (e) => {
    e.preventDefault();
    console.log(e)
    // const fileData = new FormData();
    // fileData.append('image', this.state.selectedFile, this.state.selectedFile)
  }

  render() {
    return(
      <div className='App'>
        <NavBar
          brightSpots={this.state.brightSpots}
          posts={this.state.posts}
          />

        <Route exact path='/home' render={()=>{
          return(
            <Home />
          ) } }
        />

      <Route exact path='/about' render={()=>{
          return(
            <About />
          ) } }
        />

        <Route exact path='/map' render={()=>{
        return(
          <RealMap
            spots={this.state.brightSpots}
            google={this.props.google}
            selectedPlace={this.state.selectedPlace}
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}
            onMarkerClick={this.onMarkerClickHandler}
          />
        ) } }
        />

      <Route exact path='/bright-spots' render={()=>{
            return (
              <PostContainer
                brightSpots={this.state.brightSpots}
                posts={this.state.posts}
                onClick={this.onPostClickHandler}
                currentPost={this.state.currentPost}
              />
            ) } }
        />


        <Route exact path="/new-post" render={()=>{
          return(
            <NewPostForm
             fileSelect={this.fileSelectHandler}
             fileUpload={this.fileUploadHandler}
             inputName={this.nameHandler}
             inputDescription={this.descriptionHandler}
             submitPostForm={this.submitPostFormHandler}
            />
          ) } }
        />

      </div>
  )}
}

export default App;


// <Route exact path='/bright-spots' render={()=>{
//     return(
//       <BrightSpotContainer
//         currentPost={this.state.currentPost}
//         />
//     ) } }
//     />

// <Route exact path='/bright-spots/:id' render={(props)=>{
//   let brightSpotIDinURL = props.match.params.id
//   let brightSpot = this.state.currentPost.find(spot => spot.id === brightSpotIDinURL)
//
//   return(
//     <BrightSpotContainer
//       id={`post-${this.state.currentPost.id}`}
//       key={`post-${this.state.currentPost.id}`}
//       post={this.state.posts}
//       brightSpot={this.state.brightSpots}
//       currentPost={this.state.currentPost}
//       onClick={this.onPostClickHandler}
//     />
//     ) } }
// />
