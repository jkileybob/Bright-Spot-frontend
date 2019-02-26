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


import SearchLocation from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/map/SearchLocation.js'



handleSubmit = (e) => {
  e.preventDefault();
  console.log(this.state.addressInput);

}

onChangeHandler = (e) => {
  // console.log(e.target.value);
  this.setState({
    addressInput: e.target.value
  })
}


<SearchLocation
  onSubmit={this.handleSubmit}
  onChange={this.onChangeHandler}
  />


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
