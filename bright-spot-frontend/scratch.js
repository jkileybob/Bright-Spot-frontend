// ###########################################################################
// mapMARKERS
  renderMarkers = () => {
    // console.log(this.props)
    const spotMarkers = this.props.spots.map(spot => {
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

  // wrap in a map component
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

for (i = 0; i < spots.length; i++) {
  marker = new window.google.maps.Marker({
    position: new google.maps.LatLng(spots[i][3], spots[i][4]),
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

createMarkers(users){
    const google = window.google;

    users.map(user => {
        this.marker = new google.maps.Marker({
            position: {
                lat: user.location.latitude,
                lng: user.location.longitude
            },
            map: this.map,
        });
        this.state.markers.push(this.marker);
    })
}


createMarkers(){
    const google = window.google;

    this.props.spots.map(spot => {
        this.marker = new google.maps.Marker({
            position: {
                lat: spot.latitude,
                lng: spot.longitude
            },
            map: this.map,
        });
        this.state.markers.push(this.marker);
        // debugger
    })
}

compDidUp     this.createMarkers(this.state.markers)




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

  // import React, { Component } from 'react';
  // import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
  // import CurrentLocation from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/map/Map.js'
  // import SearchLocation from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/map/SearchLocation.js'
  //
  //
  // export class MapContainer extends Component {
  //   state = {
  //    showingInfoWindow: false,  //Hides or the shows the infoWindow
  //    activeMarker: {},          //Shows the active marker upon click
  //    selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
  //    addressInput: ''           //SearchBar
  //   };
  //
  //   onMarkerClick = (props, marker, e) => {
  //     // console.log(marker)
  //     if (marker.visible){
  //       this.setState({
  //         selectedPlace: props,
  //         activeMarker: marker,
  //         showingInfoWindow: true
  //       })
  //     }
  //   }
  //   // shows the InfoWindow from google react library
  //
  //   onClose = props => {
  //     if (this.state.showingInfoWindow) {
  //       this.setState({
  //         showingInfoWindow: false,
  //         activeMarker: null
  //       });
  //     }
  //   };
  //
  // // searchbar stuff
  //   handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(this.state.addressInput);
  //
  //   }
  //   onChangeHandler = (e) => {
  //     // console.log(e.target.value);
  //     this.setState({
  //       addressInput: e.target.value
  //     })
  //   }
  //
  //
  //   render(){
  //     // console.log(this.props)
  //     if (!this.props.loaded) {
  //       return <div>Loading BrightSpot...</div>
  //     }
  //     return (
  //     <React.Fragment key="map-container">
  //       <SearchLocation
  //         onSubmit={this.handleSubmit}
  //         onChange={this.onChangeHandler}
  //       />
  //       <CurrentLocation
  //         centerAroundCurrentLocation
  //         google={this.props.google}
  //         spots={this.props.brightSpots}  >
  //           <Marker onClick={this.onMarkerClick} name={'You are here.'} />
  //           <InfoWindow
  //             marker={this.state.activeMarker}
  //             visible={this.state.showingInfoWindow}
  //             onClose={this.onClose}  >
  //               <div>
  //                 <h4>{this.state.selectedPlace.name}</h4>
  //               </div>
  //           </InfoWindow>
  //       </CurrentLocation>
  //     </React.Fragment>
  //     );
  // }
  // }
  //
  // export default GoogleApiWrapper(
  //   (props)=>({
  //     apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
  // }))(MapContainer)




  // <Route exact={true} path='/map' render={()=>{
  //   return (
  //     <MapContainer
  //       brightSpots={this.state.brightSpots}
  //     />
  //   ) } }
  // />


  // import React from 'react'
  // import ReactDOM from 'react-dom'
  // import {Map, Marker} from 'google-maps-react';
  //
  // const mapStyles = {
  //   map: {
  //     position: 'absolute',
  //     width: '50%',
  //     height: '50%',
  //     left: '25%',
  //     top: '25%'
  //   }
  // };
  //
  //
  // export class CurrentLocation extends React.Component {
  //   constructor(props) {
  //   super(props);
  //
  //     const { lat, lng } = this.props.initialCenter;
  //
  //     this.state = {
  //       currentLocation: {
  //         lat: lat,
  //         lng: lng
  //       }
  //     };
  //   }
  // // checks for JS navigator
  //   componentDidMount() {
  //     if (this.props.centerAroundCurrentLocation) {
  //       if (navigator && navigator.geolocation) {
  //         navigator.geolocation.getCurrentPosition(position => {
  //           const coords = position.coords;
  //           this.setState({
  //             currentLocation: {
  //               lat: coords.latitude,
  //               lng: coords.longitude
  //             }
  //           });
  //         });
  //       }
  //     }
  //     this.loadMap();
  //   }
  //
  //   componentDidUpdate(prevProps, prevState) {
  //     if (prevProps.google !== this.props.google) {
  //       this.loadMap();
  //     }
  //     if (prevState.currentLocation !== this.state.currentLocation) {
  //       this.recenterMap();
  //     }
  //
  //   }
  //
  //   loadMap = () => {
  //     // checks if google is available
  //     if (this.props && this.props.google) {
  //       const { google } = this.props;
  //       const maps = google.maps;
  //       const mapRef = this.refs.map;
  //
  //       // reference to the actual DOM element
  //       const node = ReactDOM.findDOMNode(mapRef);
  //
  //       let { zoom } = this.props;
  //       const { lat, lng } = this.state.currentLocation;
  //       const center = new maps.LatLng(lat, lng);
  //       const mapConfig = Object.assign(
  //         {},
  //         {
  //           center: center,
  //           zoom: zoom
  //         }
  //       );
  //       // maps.Map() is a constructor that instantiates the map
  //       this.map = new maps.Map(node, mapConfig);
  //
  //     }
  //   }
  //
  //   recenterMap() {
  //     const map = this.map;
  //     const current = this.state.currentLocation;
  //
  //     const google = this.props.google;
  //     const maps = google.maps;
  //
  //     if (map) {
  //       let center = new maps.LatLng(current.lat, current.lng);
  //       map.panTo(center);
  //     }
  //   }
  //
  //   // grabs children of CurrentLocation (aka Marker and InfoWindow) from MapCont
  // //   // clones and replaces them to have new shallowly merged props
  //   renderChildren() {
  //     const { children } = this.props;
  //
  //     if (!children) return;
  //
  //     return React.Children.map(children, child => {
  //       if (!child) return;
  //       return React.cloneElement(child, {
  //         map: this.map,
  //         google: this.props.google,
  //         mapCenter: this.state.currentLocation
  //       });
  //     });
  //   }
  //
  //
  //
  //   render() {
  //     // Object.assign(trgt, src) copies values of all enumerable own
  //     // properties from one or more source objects to a target object
  //     // then returns that target object
  //     const style = Object.assign({}, mapStyles.map);
  //
  //     return (
  //       <main>
  //         <div className="map">
  //           <div style={style} ref="map">
  //             Loading map...
  //           </div>
  //           {this.renderChildren()}
  //         </div>
  //       </main>
  //     );
  //   }
  // }
  export default CurrentLocation

  // CurrentLocation.defaultProps = {
  //   zoom: 18,
  //   initialCenter: {
  //     lat: 38.919103899999996,
  //     lng: -77.0305492
  //   },
  //   centerAroundCurrentLocation: false,
  //   visible: true
  // };
