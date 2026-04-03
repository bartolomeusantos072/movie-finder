import React, { createContext, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const apiKey = "80ad7e890e3cb430af1b47af6b778720"; 

  const searchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&language=pt-BR`
      );
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