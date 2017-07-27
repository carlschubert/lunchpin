import React, {Component} from 'react';

import SinglePanel from '../SinglePanel';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      radius: 500
    }
    this.changeAddress = this.changeAddress.bind(this);
    this.changeRadius = this.changeRadius.bind(this);

  }

  changeAddress(event) {
    console.warn(this.props, event)
    if (Object.keys(this.props.googleMap).length > 0) {
      var autocomplete = new this.props.googleMap.places.Autocomplete(event.target.value);
      console.warn(autocomplete)
    }
    this.setState({address: event.target.value});
  }

  changeRadius(event) {
    this.setState({radius: event.target.value});
  }

  render() {
    const {googleMap, handleSubmit} = this.props;
    const {address, radius} = this.state;
    return (
      <div>
        <SinglePanel title="Search">
          <form onSubmit={(event) => handleSubmit(event)} className='search-form'>
            <div className='search-form-details'>
              <input
                type='text'
                name='address'
                ref={}
                value={this.state.value}
                onChange={this.changeAddress}
                placeholder='address'/>
              <input
                type='text'
                name='radius'
                value={this.state.value}
                onChange={this.changeRadius}
                placeholder='max distance'/>
              <button>Update Search</button>
            </div>
          </form>
        </SinglePanel>
      </div>
    );
  }
}
