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
import EditPostForm from '../src/Posts/EditPost.js'
import RealMap from '../src/map/RealMap.js'


class App extends Component {

  // STATE:
  state = {
    brightSpots: [],     //all spots
    posts: [],           //all posts
    currentPost: {},     //selected post
    visible: false,      //visibility of infowindow
    showModal: false,    //visibility of modal
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


// POST CLICKS:
  onPostClickHandler = (e) => {
    // console.log(e.currentTarget);
    this.state.brightSpots.map(spot =>{
      if (spot.id === parseInt(e.currentTarget.id)){
        this.setState({
          currentPost: spot,
          showModal: true
        })
      }
    })
  }

  hideModal = (e) => {
    this.setState({
      currentPost: {},
      showModal: false
    })
  }


// MAP CLICKS:
  onMarkerClickHandler = (e) => {
    // console.log(e.spot)
    this.setState({
      currentPost: e.spot,
      visible: true
    })
  }

  onCloseIWHandler = (e) => {
    this.setState({
      visible: false
    })
  }


  // FORM CLICKS:
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

  latHandler = (e) => {
    this.setState({
      postLatInput: e.target.value
    })
  }

  longHandler = (e) => {
    this.setState({
      postLongInput: e.target.value
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

  //will fetch post newly created data to backend
  submitPostFormHandler = (e) => {
    e.preventDefault();
    // console.log(e)
    // const fileData = new FormData();
    // fileData.append('image', this.state.selectedFile, this.state.selectedFile)
  }

  submitEditHandler = (e) => {
    e.preventDefault();
    let editPostId = this.state.currentPost.id

    fetch(`http://localhost:3001/api/v1/bright_spots/${editPostId}`,
      { method: 'PATCH',
       headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json"
                },
       body: JSON.stringify({
          name: this.state.postNameInput,
          description: this.state.postDescrInput
       })
      }
    )
    .then(response => response.json())
    .then(updatedBrightSpot =>{

    let copy = this.state.brightSpots.slice();
    let index = copy.findIndex((spot) => { return spot.id === updatedBrightSpot.id });
      copy.splice(index, 1, updatedBrightSpot);
      this.setState({
        brightSpots: copy
      });
      console.log(updatedBrightSpot)
      console.log(this.state.brightSpots)
      alert("Your changes have been saved!")
    })
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
              currentPost={this.state.currentPost}
              visible={this.state.visible}
              onClose={this.onCloseIWHandler}
              onMarkerClick={this.onMarkerClickHandler}
              onInfoWindowClick={this.onInfoWindowClickHandler}
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

        <Route exact path='/bright-spots/:id' render={(props)=>{
          let spotIDinURL = parseInt(props.match.params.id)
          let spot = this.state.brightSpots.find(spot => spot.id === spotIDinURL)

          return(
            spot ?
            <BrightSpot
              id={`bright-spot-${spot.id}`}
              key={`bright-spot-${spot.id}`}
              spot={spot}
              showModal={this.state.showModal}
              onClickClose={this.hideModal}
            /> : null
            ) } }
        />

        <Route exact path="/new-post" render={()=>{
          return(
            <NewPostForm
             fileSelect={this.fileSelectHandler}
             fileUpload={this.fileUploadHandler}
             inputName={this.nameHandler}
             inputDescription={this.descriptionHandler}
             inputLatitude={this.latHandler}
             inputLongitude={this.longHandler}
             submitPostForm={this.submitPostFormHandler}
            />
          ) } }
        />

      <Route exact path="/edit-post" render={()=>{
          return(
            <EditPostForm
             currentPost={this.state.currentPost}
             inputName={this.nameHandler}
             inputDescription={this.descriptionHandler}
             submitEdit={this.submitEditHandler}
            />
          ) } }
        />
      </div>
  )}
}

export default App;
