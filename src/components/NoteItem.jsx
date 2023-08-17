import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  toggleArchive,
}) {
  return (
    <div className='note-item'>
      <NoteItemContent
        id={id}
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
        onDelete={onDelete}
        toggleArchive={toggleArchive}
      />
      <NoteItemAction
        id={id}
        archived={archived}
        onDelete={onDelete}
        toggleArchive={toggleArchive}
      />
    </div>
  );
}

export default NoteItem;
