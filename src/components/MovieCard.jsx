function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.Title}</h2>
      <p>{movie.Year}</p>
      {movie.Poster !== "N/A" ? (
        <img src={movie.Poster} alt={movie.Title} width="150" />
      ) : (
        <div className="no-poster">Aucune image</div>
      )}
    </div>
  );
}

export default MovieCard;
