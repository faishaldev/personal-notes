import React from 'react';
import DeleteButton from './DeleteButton';
import ArchiveButton from './ArchiveButton';

function NoteItemAction({ id, archived, onDelete, toggleArchive }) {
  return (
    <div className='note-item__action'>
      <DeleteButton key={id} id={id} onDelete={onDelete} />
      <ArchiveButton
        key={id}
        id={id}
        archived={archived}
        toggleArchive={toggleArchive}
      />
    </div>
  );
}

export default NoteItemAction;
