import React from 'react';
import ArchivedNoteList from './ArchivedNoteList';

function ArchivedNoteListItem({ notes, onDelete, toggleArchive }) {
  return (
    <>
      <h2>Arsip</h2>
      <ArchivedNoteList
        notes={notes}
        onDelete={onDelete}
        toggleArchive={toggleArchive}
      />
    </>
  );
}

export default ArchivedNoteListItem;
