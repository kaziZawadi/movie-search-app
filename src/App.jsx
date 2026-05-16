import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  async function handleSearch(query) {
    setLoading(true);
    setHasSearched(true);
    setError("");

    const response = await fetch(
      `https://www.omdbapi.com/?apikey=aed80c24&s=${encodeURIComponent(query)}`,
    );

    const data = await response.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
      setError("Aucun film trouvé");
    }

    setLoading(false);
  }

  function addFavorite(movie) {
    const alreadyFavorite = favorites.find(
      (fav) => fav.imdbID === movie.imdbID,
    );

    if (alreadyFavorite) return;

    setFavorites([...favorites, movie]);
  }

  function removeFavorite(imdbID) {
    const updatedFavorites = favorites.filter(
      (movie) => movie.imdbID !== imdbID,
    );

    setFavorites(updatedFavorites);
  }

  return (
    <div className="app">
      <h1>Movie Search App</h1>

      <SearchBar onSearch={handleSearch} loading={loading} />

      {loading && <p>Chargement...</p>}
      {error && <p>{error}</p>}

      <h2>Favoris ({favorites.length})</h2>

      {favorites.length > 0 ? (
        <MovieList movies={favorites} onRemoveFavorite={removeFavorite} />
      ) : (
        <p>Aucun favori pour le moment.</p>
      )}

      {hasSearched && (
        <>
          <h2>Résultats</h2>

          <MovieList
            movies={movies}
            favorites={favorites}
            onAddFavorite={addFavorite}
          />
        </>
      )}
    </div>
  );
}

export default App;
