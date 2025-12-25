import React, { useState } from 'react';
import { moviesData } from '../data/moviesData';
import MovieCard from '../components/MovieCard';
import '../styles/Browse.css';

const Browse = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('title');

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handleSortChange = (e) => setSortBy(e.target.value);

  const filteredMovies = moviesData
    .filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      if (sortBy === 'year') return b.year - a.year;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });

  return (
    <div className="browse">
      <div className="browse-header">
        <h1>Browse Movies</h1>
        <div className="browse-controls">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <select value={sortBy} onChange={handleSortChange} className="sort-select">
            <option value="title">Sort by Title</option>
            <option value="year">Sort by Year</option>
            <option value="rating">Sort by Rating</option>
          </select>
        </div>
      </div>
      <div className="browse-results">
        <p className="results-count">Showing {filteredMovies.length} movies</p>
        <div className="browse-grid">
          {filteredMovies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default Browse;
