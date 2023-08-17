import React from 'react';
import NoteItem from './NoteItem';

function ArchivedNoteList({ notes, onDelete, toggleArchive }) {
  const archivedNotes = notes.filter((note) => note.archived === true);

  if (archivedNotes.length) {
    return (
      <div className='notes-list'>
        {notes
          .filter((note) => note.archived === true)
          .map((note) => (
            <NoteItem
              key={note.id}
              id={note.id}
              title={note.title}
              body={note.body}
              createdAt={note.createdAt}
              archived={note.archived}
              onDelete={onDelete}
              toggleArchive={toggleArchive}
            />
          ))}
      </div>
    );
  } else {
    return (
      <div className='notes-list__empty-message'>
        <p>Tidak ada catatan</p>
      </div>
    );
  }
}

export default ArchivedNoteList;
