import React, { useState } from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import MovieModal from './MovieModal';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleFavoriteClick = (e) => {
    e.stopPropagation();
    if (isFavorite(movie.id)) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };

  return (
    <>
      <div className="movie-card" onClick={() => setShowModal(true)}>
        <img src={movie.image || "/placeholder.svg"} alt={movie.title} />
        <div className="movie-card-overlay">
          <h3>{movie.title}</h3>
          <div className="movie-card-info">
            <span className="rating">★ {movie.rating}</span>
            <span>{movie.year}</span>
          </div>
          <button className="favorite-btn" onClick={handleFavoriteClick}>
            {isFavorite(movie.id) ? '❤' : '♡'}
          </button>
        </div>
      </div>
      {showModal && <MovieModal movie={movie} onClose={() => setShowModal(false)} />}
    </>
  );
};

export default MovieCard;
