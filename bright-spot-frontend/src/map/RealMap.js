import React from 'react'
import ReactDOM from 'react-dom'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';


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
      lat: position.coords.latitude,
      lng: position.coords.longitude
    })

  }

  render(){

    return(
      <div className='map'>
        <Map
        google={this.props.google}
        zoom={15}
        centerAroundCurrentLocation={this.state.center}
        >

          {this.props.spots.map(spot =>
            <Marker
            spot={spot}
            position={{lat: Number(spot.latitude), lng: Number(spot.longitude)}}
            />
          )}

        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper(
  (props)=>({
    apiKey: (process.env.REACT_APP_GOOGLE_MAPS_API_KEY)
}))(RealMap)
