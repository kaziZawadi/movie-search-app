import MovieCard from "./MovieCard";

function MovieList({ movies, favorites, onAddFavorite, onRemoveFavorite }) {
  if (movies.length === 0) {
    return <p>Aucun film à afficher</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.imdbID}
          movie={movie}
          favorites={favorites}
          onAddFavorite={onAddFavorite}
          onRemoveFavorite={onRemoveFavorite}
        />
      ))}
    </div>
  );
}

export default MovieList;
