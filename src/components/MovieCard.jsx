import React from "react";

const MovieCard = ({ movie }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    <li className="movie-card">
      {movie.poster_path ? (
        <img src={imageUrl} alt={movie.title} />
      ) : (
        <div className="no-image">Sem Foto</div>
      )}
      <div className="info">
        <p><strong>{movie.title}</strong></p>
        <p>⭐ {movie.vote_average.toFixed(1)}</p>
      </div>
    </li>
  );
};

export default MovieCard;