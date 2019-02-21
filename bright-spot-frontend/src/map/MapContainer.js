import React, { Component } from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
// import Map from '/Users/jkileybob/Mod-5-Final-Project/bright-spot-frontend/src/map/Map.js'


export class MapContainer extends Component {

  state = {
   showingInfoWindow: false,  //Hides or the shows the infoWindow
   activeMarker: {},          //Shows the active marker upon click
   selectedPlace: {}          //Shows the infoWindow to the selected place upon a marker
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


  render(){

    if (!this.props.loaded) {
      return <div>Loading BrightSpot...</div>
    }
    return(
      <Map
        google={this.props.google}
        zoom={14}
        initialCenter={{
         lat: 38.919103899999996,
         lng: -77.0305492
       }} >
        <Marker
          onClick={this.onMarkerClick}
          name={'Home Sweet Home'}
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
  )}
}

export default GoogleApiWrapper(
  (props)=>({
    apiKey: ("nice try")
}))(MapContainer)
