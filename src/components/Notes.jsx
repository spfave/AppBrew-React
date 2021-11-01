import Note from './Note';

export default function Notes({ notes, deleteNote }) {
  const noteElements = notes.map((note, idx) => (
    <Note
      key={idx}
      id={idx}
      title={note.title}
      content={note.content}
      deleteNote={deleteNote}
    />
  ));

  return noteElements;
}
