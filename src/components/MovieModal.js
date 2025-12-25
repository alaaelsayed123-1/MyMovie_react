import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import '../styles/MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();

  const handleFavoriteClick = () => {
    if (isFavorite(movie.id)) removeFromFavorites(movie.id);
    else addToFavorites(movie);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✖</button>
        <div className="modal-header">
          <img src={movie.image || "/placeholder.svg"} alt={movie.title} />
        </div>
        <div className="modal-body">
          <h2>{movie.title}</h2>
          <div className="modal-meta">
            <span>★ {movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <span>{movie.category}</span>
          </div>
          <p>{movie.description}</p>
          <div className="modal-actions">
            <button>▶ Play</button>
            <button onClick={handleFavoriteClick}>
              {isFavorite(movie.id) ? '❤ Remove' : '♡ Add'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
