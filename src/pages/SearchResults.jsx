import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import MovieContext from "../context/MovieContext";
import MovieCard from "../components/MovieCard";

const SearchResults = () => {
  const { query } = useParams();
  const { movies, searchMovies, loading } = useContext(MovieContext);

  useEffect(() => {
    searchMovies(query);
  }, [query]);

  if (loading) return <p>Carregando...</p>;

  return (
    <div>
      <h2>Resultados para: {query}</h2>
      <ul className="movie-grid">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <p>Nenhum filme encontrado.</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResults;