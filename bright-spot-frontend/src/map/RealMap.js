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
console.log(this.props.currentPost.posts)
    return(
      <div className='map'>
        <Map
          google={this.props.google}
          zoom={15}
          initialCenter={this.state.center}
          center={this.state.center}
          centerAroundCurrentLocation
          styles={[
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ff00ff"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffff00"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#00ffff"
            },
            {
                "visibility": "on"
            }
        ]
    }
]}
        >

          {this.props.spots.map(spot =>
            <Marker
              onClick={this.props.onMarkerClick}
              spot={spot}
              position={{lat: Number(spot.latitude), lng: Number(spot.longitude)}}
              class='marker'
              icon='http://maps.google.com/mapfiles/kml/paddle/orange-blank.png'
            />
          )}

          {this.props.currentPost ?
            <InfoWindow
              position={{lat: this.props.currentPost.latitude, lng: this.props.currentPost.longitude}}
              map={this.props.map}
              google={this.props.google}
              visible={this.props.visible}
              currentPost={this.props.currentPost}  >
                  <div>
                    <h1
                      onClick={this.props.onNameClick}
                      >{this.props.currentPost.name}</h1>
                    <p>{this.props.currentPost.description}</p>
                  </div>
            </InfoWindow>
            : null}

        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper(
  (props)=>({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
}))(RealMap)
