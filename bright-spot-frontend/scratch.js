export default UserLocation;

UserLocation.defaultProps = {
  zoom: 18,
  initialCenter: {
    lat: 38.898129,
    lng: -77.032883
  },
  centerAroundCurrentLocation: false,
  visible: true
};


export default GoogleApiWrapper(
  (props)=>({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
}))(MapContainer)



zoom: 18,
initialCenter: {
  lat: 38.898129,
  lng: -77.032883
},
centerAroundCurrentLocation: false,
visible: true
};


const mapStyles = {
  map: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    left: '25%',
    top: '25%'
  }
};


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
