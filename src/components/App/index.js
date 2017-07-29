import React, {Component} from 'react';
import loadGoogleMapsApi from 'load-google-maps-api-2';
import __apiKey from '../../../apikey.json';

import Map from '../Map';
import ListPanels from '../ListPanels';
import DetailRestaurant from '../DetailRestaurant';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      googleMap: {},
      currentMap: {},
      venues: [],
      latLng: [40.736191, -74.030516],
      radius: 500,
      currentPlace: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setVenues = this.setVenues.bind(this);
    this.setMap = this.setMap.bind(this);
    this.setPlace = this.setPlace.bind(this);
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

  setPlace(place) {
    this.setState({
      currentPlace: place
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
    const {googleMap, latLng, radius, isLoaded, venues, handleSubmit, setMap, currentMap, currentPlace} = this.state;
    return (
      <div id="app" className="clearfix">
        {Object.keys(currentPlace).length > 0
          ? <DetailRestaurant place={currentPlace} venues={venues} setPlace={this.setPlace} />
          : <Map
            googleMap={googleMap}
            latLng={latLng}
            radius={radius}
            currentMap={currentMap}
            setVenues={this.setVenues}
            setMap={this.setMap}
          />}
        <ListPanels
          venues={venues}
          googleMap={googleMap}
          handleSubmit= {this.handleSubmit}
          currentMap={currentMap}
          setPlace={this.setPlace} />
      </div>
    );
  }
}
