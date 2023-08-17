import React from 'react';

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onTitleChangeEventHandler(event) {
    this.setState(() => {
      return {
        title: event.target.value.slice(0, 50),
      };
    });
  }

  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();
    if (this.state.title === '' || this.state.body === '') {
      return;
    }
    this.props.addNote(this.state);
  }

  render() {
    return (
      <form className='note-input' onSubmit={this.onSubmitEventHandler}>
        <h2>Buat catatan</h2>
        <p className='note-input__title__char-limit'>
          Sisa karakter: {50 - this.state.title.length}
        </p>
        <input
          className='note-input__title'
          type='text'
          placeholder='Ini adalah judul ...'
          value={this.props.title}
          onChange={this.onTitleChangeEventHandler}
          required
          maxLength={50}
        />
        <textarea
          className='note-input__body'
          type='textarea'
          placeholder='Tuliskan catatanmu di sini ...'
          value={this.props.body}
          onChange={this.onBodyChangeEventHandler}
          required
        />
        <button type='submit'>Buat</button>
      </form>
    );
  }
}

export default NoteInput;
