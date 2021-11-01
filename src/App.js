import { useState } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import CreateNote from './components/CreateNote';
import Notes from './components/Notes';
import { initNotes } from './notes';

export default function App() {
  const [notes, setNotes] = useState(initNotes);

  function addNote(note) {
    setNotes([...notes, note]);
  }

  function deleteNote(noteID) {
    const filteredNotes = notes.filter((note, idx) => idx !== noteID);
    setNotes(filteredNotes);
  }

  return (
    <div className="App">
      <Header />
      <CreateNote addNote={addNote} />
      <Notes notes={notes} deleteNote={deleteNote} />
      <Footer />
    </div>
  );
}
