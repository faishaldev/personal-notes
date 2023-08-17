import React from 'react';
import SearchInput from './SearchInput';

function NoteHeader({ onSearch }) {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <SearchInput onSearch={onSearch} />
    </div>
  );
}

export default NoteHeader;
