import React from 'react';

import SinglePanel from '../SinglePanel';

const SearchForm = (props) => {
  const {handleSubmit} = props;
  return (
    <div>
      <SinglePanel title="Search">
        <form onSubmit={handleSubmit} className='search-form'>
          <div className='search-form-details'>
            <input type='text' name='address' placeholder='address'/>
            <input type='text' name='radius' placeholder='max distance'/>
            <button>Update Search</button>
          </div>
        </form>
      </SinglePanel>
    </div>
  );
};

export default SearchForm;
