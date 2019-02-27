import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import NavBar from '../src/NavBar'
import MapContainer from '../src/map/MapContainer'
import BrightSpotContainer from '../src/BrightSpot/BrightSpotContainer'
import PostContainer from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/Posts/PostContainer.js'
import NewPostForm from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/Posts/NewPostForm.js'

class App extends Component {

// STATE:
  state = {
    brightSpots: [],      //all spots
    posts: [],            //all posts
    currentPost: null,    //currentPost for single render
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
    let spotArray = this.state.brightSpots.map(spot =>{
      if (spot.id === parseInt(e.currentTarget.id)){
        this.setState({
          currentPost: spot
        })
      }
    })
  }

// FORM STUFF:
  onClickNewHandler = (e) => {
    console.log(e)
  }

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

  //will fecth post data to backend
  submitPostFormHandler = (e) => {
    e.preventDefault();
    const fileData = new FormData();
    fileData.append('image', this.state.selectedFile, this.state.selectedFile)
    console.log(e)
  }

  render() {
    return(
      <div className='App'>
        <NavBar
          brightSpots={this.state.brightSpots}
          posts={this.state.posts}
          onClick={this.onClickNewHandler}
          />

        <Route exact={true} path='/map' render={()=>{
          return (
            <MapContainer
              brightSpots={this.state.brightSpots}
            />  ) } }
        />

      <Route exact path='/posts' render={()=>{
          return (
            <PostContainer
            brightSpots={this.state.brightSpots}
            posts={this.state.posts}
            onClick={this.onPostClickHandler}
            currentPost={this.state.currentPost}
          /> ) } }
      />

      <Route exact path='/brightSpots' render={()=>{
          return(
            <BrightSpotContainer
             currentPost={this.state.currentPost}
            /> ) } }
      />

      <Route exact path='/new-post' render={()=>{
          return(
            <NewPostForm
             fileSelect={this.fileSelectHandler}
             fileUpload={this.fileUploadHandler}
             submitPostForm={this.submitPostFormHandler}
             inputName={this.nameHandler}
             inputDescription={this.descriptionHandler}
             /> ) } }
      />

      </div>

  )}
}

export default App;
