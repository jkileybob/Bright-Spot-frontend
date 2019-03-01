import React from 'react'
import ReactDOM from 'react-dom'
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

export class RealMap extends React.Component {

  state = {
   showingInfoWindow: false,
   activeMarker: {},
   selectedPlace: {},
  };

  componentDidMount(){
    debugger
  }

  render(){
    // console.log(this.props.spots)
    return(
      <div>
        <Map google={this.props.google}>
        {this.props.spots.map(spot =>
          <Marker
          spot={spot}
          position={{lat: spot.latitude, lng: spot.longitude}}
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
