import React, {Component} from 'react';
import loadGoogleMapsApi from 'load-google-maps-api-2';
import __apiKey from '../../../apikey.json';

import NavBar from '../NavBar';
import Map from '../Map';
import ListPanels from '../ListPanels';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googleMap: {},
      currentMap: {},
      venues: [],
      latLng: [40.736191, -74.030516],
      radius: 500,
      isLoaded: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setVenues = this.setVenues.bind(this);
    this.setMap = this.setMap.bind(this);
  }

  componentDidMount() {
    loadGoogleMapsApi({
      libraries: ['places'],
      key: __apiKey.googleMapsKey
    }).then((googleMaps) => {
      this.setState({
        googleMap: googleMaps,
        isLoaded: true
      });
    });
  }

  setMap(map) {
    this.setState({
      currentMap: map
    });
  }

  setVenues(places) {
    this.setState({
      venues: places
    });
  }

  handleSubmit(place, radius) {
    let lat = place.geometry.location.lat();
    let lng = place.geometry.location.lng();
    this.setState({
      latLng: [lat, lng],
      radius: radius
    });
  }

  render() {
    const {googleMap, latLng, radius, isLoaded, venues, handleSubmit, setMap, currentMap} = this.state;
    return (
      <div id="app" className="clearfix">
        <Map
          googleMap={googleMap}
          latLng={latLng}
          radius={radius}
          isLoaded={isLoaded}
          setVenues={this.setVenues}
          setMap={this.setMap} />
        <ListPanels
          venues={venues}
          googleMap={googleMap}
          handleSubmit= {this.handleSubmit}
          currentMap={currentMap} />
      </div>
    );
  }
}
