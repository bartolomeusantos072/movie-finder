import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [term, setTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (term.trim()) {
      navigate(`/search/${term}`);
      setTerm("");
    }
  };

  return (
    <header>
      <h1>Movie Finder</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Busque um filme..." 
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button type="submit" disabled={!term}>Pesquisar</button>
      </form>
    </header>
  );
};

export default Header;