import React from 'react'
import ReactDOM from 'react-dom'
import {Map, Marker} from 'google-maps-react';

const mapStyles = {
  map: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    left: '25%',
    top: '25%'
  }
};

// <Map>
// {this.props.locations.map( location =>
// <Marker
// id=location.id
// name=location.name
// />
//
// </Map>

export class CurrentLocation extends React.Component {
  constructor(props) {
  super(props);

    const { lat, lng } = this.props.initialCenter;

    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      },
      markers: []
    };
  }
// checks for JS navigator
  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const coords = position.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
    this.createMarkers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.google !== this.props.google) {
      this.loadMap();
    }
    if (prevState.currentLocation !== this.state.currentLocation) {
      this.recenterMap();
    }

  }

  loadMap = () => {
    // checks if google is available
    if (this.props && this.props.google) {
      const { google } = this.props;
      const maps = google.maps;
      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom
        }
      );
      // maps.Map() is a constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
      console.log(this.map)
      console.log('sup')
    }
  }

  recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  // grabs children of CurrentLocation (aka Marker and InfoWindow) from MapCont
  // clones and replaces them to have new shallowly merged props
  renderChildren() {
    const { children } = this.props;

    if (!children) return;

    return React.Children.map(children, child => {
      if (!child) return;
      return React.cloneElement(child, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation
      });
    });
  }


  createMarkers = () => {

  let markers = this.props.spots.map(spot => {
    return new window.google.maps.Marker({
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation,
        setPosition: {
          lat: spot.latitude,
          lng: spot.longitude
        }
      })
  });
  //
  this.setState({
    markers: markers
  },() => {
    markers.forEach(marker => {
      marker.setMap(this.map)
    })
  });

  console.log(markers);


  } //end create

  renderMarkers = () => {
    // console.log(this.props.spots.map(spot => {return spot}))

    // debugger
    //
    // const spotMarkers = this.props.spots.map(spot => {
    //    if (spot.latitude === null || spot.longitude === null){
    //     return null} else {
    //
    //         new window.google.maps.Marker({
    //           map: this.map,
    //           google: this.props.google,
    //           mapCenter: this.state.currentLocation,
    //           setPosition: {
    //             lat: spot.latitude,
    //             lng: spot.longitude
    //           }
    //         })
    //       }  //else closing brace
    //     }  //inner map closing brace
    //   ) //map closing parenthesis
    //   return spotMarkers;
  } //rENDderMarkers

  render() {
    // Object.assign(trgt, src) copies values of all enumerable own
    // properties from one or more source objects to a target object
    // then returns that target object
    const style = Object.assign({}, mapStyles.map);

    return (
      <main>
        <div className="map">
          <div style={style} ref="map">
            Loading map...
          </div>
          {this.renderChildren()}
        </div>
      </main>
    );
  }
}
export default CurrentLocation

CurrentLocation.defaultProps = {
  zoom: 18,
  initialCenter: {
    lat: 38.919103899999996,
    lng: -77.0305492
  },
  centerAroundCurrentLocation: false,
  visible: true
};
