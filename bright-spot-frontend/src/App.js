import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import '../src/App.css'
import NavBar from '../src/NavBar'
import Home from '../src/Home'
import About from '../src/About'
import BrightSpot from '../src/BrightSpot/BrightSpot'
import Post from '../src/Posts/Post.js'
import PostContainer from '../src/Posts/PostContainer.js'
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
    photoInput: '',
    postNameInput: '',
    postDescrInput: '',
    postLatInput: '',
    postLongInput: ''
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
          currentPost: spot
        })
      }
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

// sets current post to the last element in the bS array, so submit image has acces to specific bS id
  internetImageHandler = (e) => {
    let spotArr = this.state.brightSpots

    this.setState({
      photoInput: e.target.value,
      currentPost: spotArr[spotArr.length-1]
    })
  }

  //will fetch post newly created data to bS backend
  submitPostFormHandler = () => {
    fetch(`http://localhost:3001/api/v1/bright_spots/`,
      { method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: this.state.postNameInput,
          description: this.state.postDescrInput,
          latitude: this.state.postLatInput,
          longitude: this.state.postLongInput
        })
      }
    )
    .then(response => response.json())
    .then(newSpot => {
      this.state.brightSpots.push(newSpot)
    })
    alert("Congrats! Your new Bright Spot has been created! Now submit your image below.")
  }


  //submits to posts backend
  submitInternetImage = () => {
    fetch(`http://localhost:3001/api/v1/posts/`,
      { method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          bright_spot_id: this.state.currentPost.id,
          photo: this.state.photoInput
        })
      }
    )
    .then(response => response.json())
    .then(newImg => {
      this.state.posts.push(newImg)
    })
    alert("That oughta do it! Check out your new bright spot!")
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
      alert("Your changes have been saved!")
    })
  }

  // deleteSpot = () => {
  //     let deleteSpotID = this.state.currentPost.id
  //
  //   fetch(`http://localhost:3001/api/v1/bright_spots/${deleteSpotID}`, {
  //     method: 'DELETE'
  //   }).then(response => response.json())
  //   .then(() => `this.state.brightSpots.${deleteSpotID}.remove()`)
  //
  //
  // }
  //
  // function deletePokemon(id){
  //   fetch(`http://localhost:3000/pokemon/${id}`, {
  //     method: "DELETE"
  //   }).then(res => res.json())
  //   .then(() => {
  //     document.querySelector(`#pokemon-${id}`).remove()
  //   })
  // }

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
              delete={this.deleteSpot}
            /> : null
            ) } }
        />

        <Route exact path="/new-post" render={()=>{
          return(
            <NewPostForm
             img={this.state.photoInput}
             inputInternetImage={this.internetImageHandler}
             submitInternetImage={this.submitInternetImage}
             name={this.state.postNameInput}
             inputName={this.nameHandler}
             description={this.state.postDescrInput}
             inputDescription={this.descriptionHandler}
             lat={this.state.postLatInput}
             inputLatitude={this.latHandler}
             long={this.state.inputLongitude}
             inputLongitude={this.longHandler}
             submitPostForm={this.submitPostFormHandler}
            />
          ) } }
        />

      <Route exact path="/edit-post" render={()=>{
          return(
            <EditPostForm
             currentPost={this.state.currentPost}
             name={this.state.postNameInput}
             inputName={this.nameHandler}
             description={this.state.postDescrInput}
             inputDescription={this.descriptionHandler}
             submitEdit={this.submitEditHandler}
            />
          ) } }
        />
      </div>
  )}
}

export default App;
