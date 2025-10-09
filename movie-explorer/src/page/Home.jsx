import { useState } from "react";
import MovieCard from "../components/MovieCard";
import { getFavorites, saveFavorite, removeFavorite } from "../utils/storage";

const sampleMovies = [
  { id: 1, title: "Inception", year: 2010, poster: "https://image.tmdb.org/t/p/w300/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg" },
  { id: 2, title: "Interstellar", year: 2014, poster: "https://image.tmdb.org/t/p/w300/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg" },
  { id: 3, title: "The Dark Knight", year: 2008, poster: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg" },
];

export default function Home() {
  const [favorites, setFavorites] = useState(getFavorites());

  const toggleFavorite = (movie) => {
    if (favorites.find((m) => m.id === movie.id)) {
      removeFavorite(movie.id);
      setFavorites(favorites.filter((m) => m.id !== movie.id));
    } else {
      saveFavorite(movie);
      setFavorites([...favorites, movie]);
    }
  };

  return (
    <div className="grid">
      {sampleMovies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          toggleFavorite={toggleFavorite}
          isFav={favorites.find((m) => m.id === movie.id)}
        />
      ))}
    </div>
  );
}
