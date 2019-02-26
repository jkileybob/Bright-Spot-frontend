import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import CurrentLocation from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/map/Map.js'
import SearchLocation from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/map/SearchLocation.js'


export class MapContainer extends Component {
  state = {
   showingInfoWindow: false,  //Hides or the shows the infoWindow
   activeMarker: {},          //Shows the active marker upon click
   selectedPlace: {},         //Shows the infoWindow to the selected place upon a marker
   addressInput: ''           //SearchBar
  };

  onMarkerClick = (props, marker, e) => {
    // console.log(marker)
    if (marker.visible){
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      })
    }
  }
  // shows the InfoWindow from google react library

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };


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

  render(){


    if (!this.props.loaded) {
      return <div>Loading BrightSpot...</div>
    }
    return (
    <React.Fragment key="map-container">
      <SearchLocation
        onSubmit={this.handleSubmit}
        onChange={this.onChangeHandler}
        />
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        <Marker onClick={this.onMarkerClick} name={'current location'} />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </CurrentLocation>
    </React.Fragment>
    );
}
}

export default GoogleApiWrapper(
  (props)=>({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
}))(MapContainer)
