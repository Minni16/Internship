import { useMovies } from '../context/MoviesContext';
import MovieCard from './MovieCard';

export default function MovieGrid() {
  const { movies, loading, error } = useMovies(); 

   // checks state
  if (error) return <div className="empty">{error}</div>; // error aayo vane error message dekhaune
  if (loading) return <div className="empty">Loading...</div>; // loading ko lagi "Loading..." dekhaune
  if (!movies?.length) return <div className="empty">No movies found</div>; // movie payena vane msg dekhaune

  return (
    <>
      <div className="section-title">
        <h3>Latest YIFY Movies Torrents</h3>
        <a className="browse muted" href="/browse">Browse All</a>
      </div>
      <div className="grid">
        {movies.map(m => <MovieCard key={m.id} movie={m} />)} 
        {/* euta euta movie lai MovieCard ma pathaune */}
      </div>
    </>
  );
}


