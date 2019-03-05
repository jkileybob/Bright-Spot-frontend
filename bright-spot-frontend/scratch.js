
///////////////////////////CurrentLocation InfoWindow//////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////////////////////

 <BrightSpot
   id={`post-${this.props.currentPost.id}`}
   key={`post-${this.props.currentPost.id}`}
   post={this.props.currentPost}
 />


<Route exact path='/bright-spots' render={()=>{
    return(
      <BrightSpotContainer
        currentPost={this.state.currentPost}
        />
    ) } }
    />

<Route exact path='/bright-spots/:id' render={(props)=>{
  let spotIDinURL = props.match.params.id
  let spot = this.state.currentPost.find(spot => spot.id === spotIDinURL)

  return(
    <BrightSpot
      id={`post-${this.props.currentPost.id}`}
      key={`post-${this.props.currentPost.id}`}
      currentPost={this.state.currentPost}
      showModal={this.state.showModal}
      onClickClose={this.hideModal}
    />
    ) } }
/>


<Route exact path='/posts/:id' render={()=>{
    return(

    ) } }
  />


  <Route exact path='/bright-spots/:id' render={(props)=>{
      let brightSpotIDinURL = props.match.params.id
      let spot = this.state.brightSpots.find(spot => spot.id === brightSpotIDinURL)

      return(
        <BrightSpotContainer
         currentPost={this.state.currentPost}
        />
      ) } }
    />
