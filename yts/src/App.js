import './App.css';
import { MoviesProvider } from './context/MoviesContext';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';

function App() {
  return (
    <MoviesProvider>
      <div className="app">
        <Header />
        <main className="container">
          <MovieGrid />
        </main>
      </div>
    </MoviesProvider>
  );
}

export default App;
