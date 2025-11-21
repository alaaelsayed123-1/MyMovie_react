import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieRow.css';

const MovieRow = ({ title, movies, rowId }) => {

  const scroll = (direction) => {
    const row = document.getElementById(rowId);
    if (row) {
      const scrollAmount = direction === 'left' ? -800 : 800;
      row.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="movie-row">
      <h2>{title}</h2>
      <div className="row-container">
        <button className="scroll-btn left" onClick={() => scroll('left')}>‹</button>
        <div className="movie-row-items" id={rowId}>
          {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
        <button className="scroll-btn right" onClick={() => scroll('right')}>›</button>
      </div>
    </div>
  );
};

export default MovieRow;
