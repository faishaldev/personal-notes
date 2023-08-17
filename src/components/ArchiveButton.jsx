import React from 'react';

function ArchiveButton({ id, archived, toggleArchive }) {
  return (
    <>
      <button
        className='note-item__archive-button'
        onClick={() => toggleArchive(id)}
      >
        {archived ? 'Pindahkan' : 'Arsipkan'}
      </button>
    </>
  );
}

export default ArchiveButton;
