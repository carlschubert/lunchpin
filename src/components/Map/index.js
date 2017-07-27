import React, {Component} from 'react';

export default class Map extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.googleMap !== this.props.googleMap) {
      this.loadMap();
    }
  }

  loadMap() {
    const {googleMap, latLng, radius, setVenues} = this.props;

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
    const myLoc = new googleMap.Marker({
      position: myLatlng,
      title: 'Noteworth'
    });

    var request = {
      location: myLatlng,
      radius: radius,
      type: ['restaurant']
    };
    let service = new googleMap.places.PlacesService(map);
    service.nearbySearch(request, (places, status) => {
      if (status === 'OK') {
        places.forEach(place => {
          let marker = new googleMap.Marker({
            position: place.geometry.location,
            map: map,
            title: place.name
          });
          marker.setMap(map);
        });
        setVenues(places)
      }
    });
    // Add the marker to the map by calling setMap()
    myLoc.setMap(map);
  }

  render() {
    return (
      <div className="map-container col-sm-8 col-lg-9">
        <div>
          <div id="map-canvas" ref={(map) => { this.map = map; }}></div>
        </div>
      </div>
    );
  }
}
