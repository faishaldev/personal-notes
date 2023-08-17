import React from 'react';
import NoteItem from './NoteItem';

function ActiveNoteList({ notes, onDelete, toggleArchive }) {
  const activeNotes = notes.filter((note) => note.archived === false);

  if (activeNotes.length) {
    return (
      <div className='notes-list'>
        {notes
          .filter((note) => note.archived === false)
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
          ))
          .reverse()}
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

export default ActiveNoteList;
