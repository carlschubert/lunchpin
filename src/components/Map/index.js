import React, {Component} from 'react';

export default class Map extends Component {
  loadMap(googleMap, latLng) {
    // initialize new google maps LatLng object
    const myLatlng = new googleMap.LatLng(...latLng);
    // set the map options hash
    const mapOptions = {
      center: myLatlng,
      zoom: 16,
      mapTypeId: googleMap.MapTypeId.ROADMAP
    };
    const map = new googleMap.Map(this.map, mapOptions);
    // Add the marker to the map
    const marker = new googleMap.Marker({
      position: myLatlng,
      title: 'Noteworth'
    });
    // Add the marker to the map by calling setMap()
    marker.setMap(map);
  }

  render() {
    const {map, latLng} = this.props;

    if (Object.keys(map).length > 0) {
      this.loadMap(map, latLng);
    }

    return (
      <div className="map-container col-sm-8 col-lg-9">
        <div>
          <div id="map-canvas" ref={(map) => { this.map = map; }}></div>
        </div>
      </div>
    );
  }
}
