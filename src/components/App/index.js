import React, {Component} from 'react';
import loadGoogleMapsApi from 'load-google-maps-api-2';
import apiKey from '../../../apikey.json';

import NavBar from '../NavBar';
import Map from '../Map';
import ListPanels from '../ListPanels';
loadGoogleMapsApi.key = apiKey.googleMapsKey;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: {},
      latLng: [40.736191, -74.030516]
    };
  }

  componentDidMount() {
    loadGoogleMapsApi().then((googleMaps) => {
      this.setState({
        map: googleMaps
      });
      return googleMaps;
    });
  }

  render() {
    const {map, latLng} = this.state;
    return (
      <div>
        <NavBar />
        <div id="app" className="clearfix">
          <Map map={map} latLng={latLng} />
          <ListPanels />
        </div>
      </div>
    );
  }
}
