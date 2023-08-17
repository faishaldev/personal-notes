import React from 'react';
import NoteHeader from './NoteHeader';
import NoteBody from './NoteBody';
import { getInitialData } from '../utils';

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData(),
    };

    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onToggleArchiveHandler = this.onToggleArchiveHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: +new Date(),
            archived: false,
          },
        ],
      };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((notes) => notes.id !== id);
    this.setState({ notes });
  }

  onToggleArchiveHandler(id) {
    const notes = this.state.notes.map((note) =>
      note.id === id ? { ...note, archived: !note.archived } : note
    );
    this.setState({ notes });
  }

  onSearchHandler(query) {
    if (query.trim() === '') {
      this.setState({ notes: getInitialData() });
    } else {
      const filteredNotes = this.state.notes.filter((notes) =>
        notes.title.toLowerCase().includes(query.toLowerCase())
      );
      this.setState({ notes: filteredNotes });
    }
  }

  render() {
    return (
      <>
        <NoteHeader onSearch={this.onSearchHandler} />
        <NoteBody
          notes={this.state.notes}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          toggleArchive={this.onToggleArchiveHandler}
        />
      </>
    );
  }
}

export default NoteApp;
