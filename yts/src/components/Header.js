export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <div className="logo-badge">Y</div>
        <div className="brand">YTS<span className="muted">.mx</span></div>
        <div className="tagline muted">HD movies at the smallest file size.</div>
      </div>
      <div className="spacer" />
      <div className="searchbar">
        <i className="fas fa-search search-icon" aria-hidden="true" />
        <input placeholder="Quick search" />
      </div>
      <nav className="nav">
        <a href="/">Home</a>
        <a href="/4k" className="active">4K</a>
        <a href="/trending">Trending</a>
        <a href="/browse">Browse Movies</a>
        <span className="divider" />
        <a href="/login" className="bold">Login</a>
        <span>|</span>
        <a href="/register" className="bold">Register</a>
      </nav>
    </header>
  );
}


