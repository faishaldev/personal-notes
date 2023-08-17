import React from 'react';

function SearchInput({ onSearch }) {
  return (
    <div className='note-search'>
      <input
        type='text'
        placeholder='Cari catatan ...'
        onKeyUp={() => this.props.onSearchHandler(this.state.keyword)}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchInput;
