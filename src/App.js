import Footer from './components/Footer';
import Header from './components/Header';
import Notes from './components/Notes';
import { notes } from './notes';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Notes notes={notes} />
      <Footer />
    </div>
  );
}
