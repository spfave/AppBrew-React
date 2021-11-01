import { useState } from 'react';

export default function CreateNote({ addNote }) {
  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  function updateNote(event) {
    const { name, value } = event.target;
    setNote({ ...note, [name]: value });
  }

  function saveNote(event) {
    event.preventDefault();

    if (note.title && note.content) {
      addNote(note);
      setNote({ title: '', content: '' });
    }
  }

  return (
    <div>
      <form onSubmit={saveNote}>
        <input
          name="title"
          type="text"
          onChange={updateNote}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={updateNote}
          value={note.content}
          placeholder="Write a note..."
          rows="3"
        ></textarea>
        <button type="submit">+</button>
      </form>
    </div>
  );
}
