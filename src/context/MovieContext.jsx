import React, { createContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = import.meta.env.VITE_TMDB_KEY;

  const searchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/search/movie?api_key=${apiKey}&query=${query}`);
      
      const data = await response.json();
      setMovies(data.results || []);
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieContext.Provider value={{ movies, searchMovies, loading }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;