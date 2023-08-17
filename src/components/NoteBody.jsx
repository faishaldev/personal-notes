import React from 'react';
import NoteInput from './NoteInput';
import ActiveNoteListItem from './ActiveNoteListItem';
import ArchivedNoteListItem from './ArchivedNoteListItem';

function NoteBody({ notes, addNote, onDelete, toggleArchive }) {
  return (
    <div className='note-app__body'>
      <NoteInput addNote={addNote} />
      <ActiveNoteListItem
        notes={notes}
        onDelete={onDelete}
        toggleArchive={toggleArchive}
      />
      <ArchivedNoteListItem
        notes={notes}
        onDelete={onDelete}
        toggleArchive={toggleArchive}
      />
    </div>
  );
}

export default NoteBody;
