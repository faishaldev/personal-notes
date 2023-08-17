import React from 'react';
import NoteItemTitle from './NoteItemTitle';
import NoteItemBody from './NoteItemBody';
import NoteItemDate from './NoteItemDate';

function NoteItemContent({ title, body, createdAt }) {
  return (
    <div className='note-item__content'>
      <NoteItemTitle title={title} />
      <NoteItemDate createdAt={createdAt} />
      <NoteItemBody body={body} />
    </div>
  );
}

export default NoteItemContent;
