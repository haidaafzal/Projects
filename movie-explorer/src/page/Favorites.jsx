import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { getFavorites, removeFavorite } from "../utils/storage";

export default function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites(getFavorites());
  }, []);

  const toggleFavorite = (movie) => {
    removeFavorite(movie.id);
    setFavorites(favorites.filter((m) => m.id !== movie.id));
  };

  return (
    <div className="grid">
      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            toggleFavorite={toggleFavorite}
            isFav={true}
          />
        ))
      )}
    </div>
  );
}
