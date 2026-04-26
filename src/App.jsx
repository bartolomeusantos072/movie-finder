import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import { MovieProvider } from "./context/MovieContext";
import Header from "./components/Header";
import SearchResults from "./pages/SearchResults";
import "./App.css";

function App() {
  return (
    <MovieProvider>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<SearchResults />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </HashRouter>
    </MovieProvider>
  );
}

export default App;