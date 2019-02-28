import React from 'react'
import ReactDOM from 'react-dom'


const mapStyles = {
  map: {
    position: 'absolute',
    width: '50%',
    height: '50%',
    left: '25%',
    top: '25%'
  }
};

export class CurrentLocation extends React.Component {
  constructor(props) {
  super(props);

  const { lat, lng } = this.props.initialCenter;
  this.state = {
    currentLocation: {
      lat: lat,
      lng: lng
    }
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
}

componentDidUpdate(prevProps, prevState) {
  if (prevProps.google !== this.props.google) {
    this.loadMap();
  }
  if (prevState.currentLocation !== this.state.currentLocation) {
    this.recenterMap();
  }
}

loadMap() {
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
  // debugger
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
