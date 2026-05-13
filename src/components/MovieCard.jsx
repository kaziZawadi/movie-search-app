function MovieCard({ movie, onAddFavorite, onRemoveFavorite }) {
  return (
    <div className="movie-card">
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      {movie.Poster !== "N/A" ? (
        <>
          <img src={movie.Poster} alt={movie.Title} width="150" />

          {onAddFavorite && (
            <button onClick={() => onAddFavorite(movie)}>
              Ajouter aux favoris
            </button>
          )}

          {onRemoveFavorite && (
            <button onClick={() => onRemoveFavorite(movie.imdbID)}>
              Retirer
            </button>
          )}
        </>
      ) : (
        <div className="no-poster">Aucune image</div>
      )}
    </div>
  );
}

export default MovieCard;
