// movie vanne prop linxa
export default function MovieCard({ movie }) {
  const cover = movie.large_cover_image || movie.medium_cover_image || movie.small_cover_image; // movie poster select garna lai, fallback 
  const torrents = movie.torrents || []; // movie ko torrents array linxa ani if xaina vaye empty array assign gardinxa
  const order = { '2160p': 3, '1080p': 2, '720p': 1 }; // order mapping - resolution ranking since '2160p' is a string
  
  const bestQuality = torrents.reduce((best, t) => {
    const current = order[best] || 0;
    const candidate = order[t.quality] || 0;
    return candidate > current ? t.quality : best;
  }, '1080p'); // finds best quality using reduce and mathi ko order mapping, ani default chai 1080p
  
  const genres = movie.genres || []; // genres array xaina bhane empty array
  const rating = Number(movie.rating) || 0; // rating lai number ma convert garxa, if fails vaye 0 assign garxa

  return (
    <article className="card">
      <div className="poster">
        <img src={cover} alt={movie.title} loading="lazy" />
        <div className="overlay">
          <i className="fas fa-star star" aria-hidden="true" />
          {rating > 0 && (
            <>
              <div className="rating">{rating} / 10</div>
            </>
          )}
          {genres.length > 0 && (
            <div className="genres">
              {genres.slice(0, 3).map(g => (
                <span className="chip" key={g}>{g}</span>
              ))}
            </div>
          )}
          <button className="btn">View Details</button>
        </div>
        <div className="tag">{bestQuality}</div>
      </div>
      <div className="meta">
        <h4 className="title">{movie.title}</h4>
        <div className="year">{movie.year}</div>
      </div>
    </article>
  );
}


