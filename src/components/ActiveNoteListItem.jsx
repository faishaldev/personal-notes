import React from 'react';
import ActiveNoteList from './ActiveNoteList';

function ActiveNoteListItem({ notes, onDelete, toggleArchive }) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <ActiveNoteList
        notes={notes}
        onDelete={onDelete}
        toggleArchive={toggleArchive}
      />
    </>
  );
}

export default ActiveNoteListItem;
