function MovieCard({ movie, favorites, onAddFavorite, onRemoveFavorite }) {
  const isFavorite = favorites?.some((fav) => fav.imdbID === movie.imdbID);

  return (
    <div className="movie-card">
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      {movie.Poster !== "N/A" ? (
        <>
          <img src={movie.Poster} alt={movie.Title} width="150" />

          {onAddFavorite && (
            <button
              className="favorite-btn"
              onClick={() => onAddFavorite(movie)}
              disabled={isFavorite}
            >
              {isFavorite ? "Déjà favori" : "Ajouter aux favoris"}
            </button>
          )}

          {onRemoveFavorite && (
            <button
              className="remove-btn"
              onClick={() => onRemoveFavorite(movie.imdbID)}
            >
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
