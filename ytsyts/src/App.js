import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Header from './components/Header';
import MovieGrid from './components/MovieGrid';

function App() {
  const [movies, setMovies] = useState([]); // API bata aako movie data store garxa
  const [loading, setLoading] = useState(false); // API call huda true huney, paxi false
  const [error, setError] = useState(null); // kei error aayo vane message store garxa

  // useEffect le component first time render huda fetchMovies() call garxa
  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true); // API call suru bhayo.
      setError(null);
      try {
        const params = new URLSearchParams();
        params.set('limit', '8'); // page number 2 pani lina milne kasari banaune herne
        // params.set('page', '2');
        const url = `https://yts.mx/api/v2/list_movies.json?${params.toString()}`;
        const res = await axios.get(url);
        const data = res?.data?.data || {};
        setMovies(Array.isArray(data.movies) ? data.movies : []); // API le return gareko movies state ma set hunxa
      } catch (e) {
        setError(e?.message || 'Error');
      } finally {
        setLoading(false); // loading sakkyo
      }
    };
    fetchMovies();
  }, []);

  return (
    <div className="app">
      <Header />
      <main className="container">
        <MovieGrid movies={movies} loading={loading} error={error} />
        {/* MovieGrid component ma 3 ta prop pathaune → movies, loading, error. */}
        {/* Ani MovieGrid bhitra chai k dekhne (loading, error, movies) decide huney. */}
      </main>
    </div>
  );
}

export default App;