import React, {Component} from 'react';

import SinglePanel from '../SinglePanel';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      newPlace: {},
      radius: 500,
      autoComplete: {}
    };
    this.changeAddress = this.changeAddress.bind(this);
    this.changeRadius = this.changeRadius.bind(this);
    this.onPlaceChanged = this.onPlaceChanged.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.googleMap !== this.props.googleMap) {
      let autocomplete = new this.props.googleMap.places.Autocomplete(this.addressInput);
      autocomplete.addListener('place_changed', this.onPlaceChanged);
      this.setState({autoComplete: autocomplete});
    }
  }

  changeAddress(event) {
    this.setState({address: event.target.value});
  }

  onPlaceChanged() {
    const place = this.state.autoComplete.getPlace();
    this.setState({newPlace: place})
  }

  changeRadius(event) {
    this.setState({radius: parseInt(event.target.value)});
  }

  render() {
    const {googleMap, handleSubmit} = this.props;
    const {address, radius, newPlace} = this.state;
    return (
      <div>
        <SinglePanel title="Search">
          <div className='search-form-details'>
            <input
              ref={(addressInput) => { this.addressInput = addressInput; }}
              type='text'
              name='address'
              value={this.state.value}
              onChange={this.changeAddress}
              placeholder='address'/>
            <input
              type='text'
              name='radius'
              value={this.state.value}
              onChange={this.changeRadius}
              placeholder='max distance'/>
            <button
              onClick={() => handleSubmit(newPlace, radius)}>Update Search</button>
          </div>
        </SinglePanel>
      </div>
    );
  }
}
