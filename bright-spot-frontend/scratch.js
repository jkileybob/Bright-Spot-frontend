<Marker
  position={this.state.center}
  icon='http://maps.google.com/mapfiles/kml/paddle/grn-blank.png'
  onClick={this.onClickCurrentLocationHandler}
 />

{this.state.visible ?
 <InfoWindow
   postion={this.state.center}
   map={this.props.map}
   google={this.props.google}
   visible={this.state.visible} >
    <div>
      <h1>you are here.</h1>
    </div>
 </InfoWindow>
 : null }
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


<Route exact path='/posts/:id' render={()=>{
    return(

    ) } }
  />


  <Route exact path='/bright-spots/:id' render={(props)=>{
      let brightSpotIDinURL = props.match.params.id
      let spot = this.state.brightSpots.find(spot => spot.id === brightSpotIDinURL)
      console.log(spot)
      // debugger
      return(
        <BrightSpotContainer
         currentPost={this.state.currentPost}
         brightSpots={this.state.brightSpots}
        />
      ) } }
    />



  <Route exact={true} path='/map' render={()=>{
    return (
      <MapContainer
        brightSpots={this.state.brightSpots}
      />
    ) } }
  />


  // NAVBAR:
    // onClickNewHandler = (e) => {
    //   console.log(e)
    // }
    //
    // onClickHomeHandler = (e) => {
    //   console.log(e)
    // }
    //
    // onClickMapHandler =(e) => {
    //   console.log(e)
    // }
