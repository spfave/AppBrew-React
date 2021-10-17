import Note from './Note';

export default function Notes({ notes }) {
  const noteElements = notes.map((note) => (
    <Note key={note.key} title={note.title} content={note.content} />
  ));

  return noteElements;
}
