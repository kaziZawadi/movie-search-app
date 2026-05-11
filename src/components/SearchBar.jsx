import { useState } from "react";

function searchBar({ onSearch, loading }) {
  const [query, setQuery] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!query.trim()) return;

    onSearch(query);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Rechercher un film..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button type="submit" disabled={loading}>
        {loading ? "Recherche..." : "Rechercher"}
      </button>
    </form>
  );
}

export default searchBar;
