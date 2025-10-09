export function getFavorites() {
  return JSON.parse(localStorage.getItem("favorites") || "[]");
}

export function saveFavorite(movie) {
  const favorites = getFavorites();
  if (!favorites.find((m) => m.id === movie.id)) {
    favorites.push(movie);
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}

export function removeFavorite(id) {
  const favorites = getFavorites().filter((m) => m.id !== id);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}
