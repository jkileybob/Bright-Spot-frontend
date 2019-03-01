// ###########################################################################
// mapMARKERS
  renderMarkers = () => {
    // console.log(this.props)
    const spotMarkers = this.props.brightSpots.map(spot => {
      if (spot.latitude === null || spot.longitude === null){
        return null} else {
          return <Marker
                    spot={spot}
                    lat={spot.latitude}
                    long={spot.longitude}
                    hover={this.state.isHovering}
                    onMarkerClick={this.onMarkerClick}
                 />
        }
      }
    })
  }
// will need a boolean state to show isHovering
// will need a function to render markers
// that is called in main map div
// (maybe alongside renderChildren?)


// ############################################################################

// moreMAPS:
var locations = [
  ['Bondi Beach', -33.890542, 151.274856, 4],
  ['Coogee Beach', -33.923036, 151.259052, 5],
  ['Cronulla Beach', -34.028249, 151.157507, 3],
  ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
  ['Maroubra Beach', -33.950198, 151.259302, 1]
];

var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 10,
  center: new google.maps.LatLng(-33.92, 151.25),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});



var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}


var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < brightSpots.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(brightSpots[i][1], brightSpots[i][2]),
    map: map
  });

  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][0]);
      infowindow.open(map, marker);
    }
  })(marker, i));
}


// mapIdeasCont'd:
// ############################################################################
constructor(props) {
  super(props);
  this.state = {
    markers: [] //basically, this is bSpot state
  }
}
componentDidUpdate(){
    const google = window.google;

    this.map = new google.maps.Map(this.refs.map, {
        center: this.props.center,
        zoom: 4
    });

    this.createMarkers(this.props.markers)
}

createMarkers(spots){
    const google = window.google;

    spots.map(spot => {
        this.marker = new google.maps.Marker({
            position: {
                lat: spot.latitude,
                lng: spot.longitude
            },
            map: this.map,
        });
        let x = this.props.markers.push(this.marker);
        console.log(x)
    })

}

// ############################################################################





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


<Route exact path='/brightSpots/:id' render={()=>{
    return(  ) } }
/>


// props within this function are currently undefined, need them to get header name to render
  // let getBrightSpotName = (props) => {
  //   props.brightSpots.forEach((spot) => {
  //     if (spot.id === props.post.bright_spot_id){
  //       // return spot.name
  //       console.log(spot.name)
  //     }
  //   })
  // }
  // <h1>{getBrightSpotName()}</h1>


  {this.props.brightSpots.map(spot => {
  return  <h1 id={spot.id} >{spot.name}</h1>
  })}


    // getPosts(){
    //   fetch('http://localhost:3001/api/v1/posts')
    //   .then(response => response.json())
    //   .then(posts => {
    //     console.log(posts)
    //     this.setState({
    //       posts: posts
    //     })
    //   })
    // }
