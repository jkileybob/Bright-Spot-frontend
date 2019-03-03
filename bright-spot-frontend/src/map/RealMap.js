import React from 'react'
import ReactDOM from 'react-dom'
import {Map, Marker, InfoWindow, GoogleApiWrapper} from 'google-maps-react';


export class RealMap extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
     center: {}
    };
  }

  componentDidMount(){
    // debugger
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.centerMap)
    } else {alert("I'm sorry! Your browser doesn't support your pursuit of happiness.")}
  }



  centerMap = (position) => {
    let coords = new this.props.google.maps.LatLng(
      position.coords.latitude,
      position.coords.longitude
    );

    this.setState({
      center: {
      lat: position.coords.latitude,
      lng: position.coords.longitude
      }
    })
  }

  render(){

    return(
      <div className='map'>
        <Map
        google={this.props.google}
        zoom={15}
        initialCenter={this.state.center}
        centerAroundCurrentLocation
        >
          <Marker
            onClick={this.props.onMarkerClick}
            name={'You are here.'}
            postion={this.state.mapCenter}
          />

          {this.props.spots.map(spot =>
            <Marker
              onClick={this.props.onMarkerClick}
              spot={spot}
              position={{lat: Number(spot.latitude), lng: Number(spot.longitude)}}
            />
          )}

          {
            // this.props.currentPost ?
            <InfoWindow
              visible={this.props.showingInfoWindow}
              onClose={this.onClose}  >
                <div>
                  <h4>{this.props.selectedPlace.name}</h4>
                </div>
            </InfoWindow>
            // : null
          }

        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper(
  (props)=>({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
}))(RealMap)
