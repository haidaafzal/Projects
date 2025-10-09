export default function MovieCard({ movie, toggleFavorite, isFav }) {
  return (
    <div className="movie-card">
      <img src={movie.poster} alt={movie.title} />
      <h3>{movie.title} ({movie.year})</h3>
      <button onClick={() => toggleFavorite(movie)}>
        {isFav ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}
