import React from 'react';
import { useFavorites } from '../contexts/FavoritesContext';
import MovieCard from '../components/MovieCard';
import '../styles/Ratings.css';

const Ratings = () => {
  const { favorites } = useFavorites();

  return (
    <div className="ratings">
      <h1>My favorite movies</h1>
      {favorites.length === 0 ? (
        <p>Your list is empty. Add movies to your favorites!</p>
      ) : (
        <div className="ratings-grid">
          {favorites.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      )}
    </div>
  );
};

export default Ratings;
