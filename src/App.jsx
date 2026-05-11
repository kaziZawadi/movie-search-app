import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(query) {
    setLoading(true);
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

  return (
    <div className="app">
      <h1>Movie Search App</h1>

      <SearchBar onSearch={handleSearch} loading={loading} />
      {loading && <p>Chargement...</p>}
      {error && <p>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
