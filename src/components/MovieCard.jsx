import React, { useState } from "react"; // 1. Importar o useState

const MovieCard = ({ movie }) => {
  // 2. Criar um estado para controlar se os detalhes aparecem
  const [showDetails, setShowDetails] = useState(false);

  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  return (
    // 3. Adicionar o evento de clique na li
    <li 
      className={`movie-card ${showDetails ? "active" : ""}`} 
      onClick={() => setShowDetails(!showDetails)}
      style={{ cursor: 'pointer' }} // Mostra que é clicável
    >
      {movie.poster_path ? (
        <img src={imageUrl} alt={movie.title} />
      ) : (
        <div className="no-image">Sem Foto</div>
      )}
      
      <div className="info">
        <p><strong>{movie.title}</strong></p>
        <p>⭐ {movie.vote_average?.toFixed(1)}</p>
        
        {/* 4. Lógica de Expansão: Só mostra se showDetails for true */}
        {showDetails && (
          <div className="details">
            <hr />
            <p className="overview">{movie.overview || "Sinopse não disponível."}</p>
            <p><small>Lançamento: {movie.release_date}</small></p>
          </div>
        )}
      </div>
    </li>
  );
};

export default MovieCard;