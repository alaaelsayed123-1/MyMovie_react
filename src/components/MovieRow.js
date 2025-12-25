import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieRow.css';

function MovieRow(props) {

  return (
    <div className="movie-row">
      <h2>{props.title}</h2>
      <div className="row-container">
        <button onClick={(e) => {
          e.currentTarget.parentNode.querySelector('.movie-row-items').scrollBy({ left: -800, behavior: 'smooth' });
        }}>‹</button>

        <div className="movie-row-items">
          {props.movies.map(function(movie) {
            return <MovieCard key={movie.id} movie={movie} />;
          })}
        </div>

        <button onClick={(e) => {
          e.currentTarget.parentNode.querySelector('.movie-row-items').scrollBy({ left: 800, behavior: 'smooth' });
        }}>›</button>
      </div>
    </div>
  );
}

export default MovieRow;
