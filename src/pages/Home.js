import React from 'react';
import { moviesData } from '../data/moviesData';
import MovieRow from '../components/MovieRow';
import '../styles/Home.css';

const Home = () => {

  const featuredMovie = moviesData[0];

  const actionMovies = moviesData.filter(movie => movie.category === "Action");
  const dramaMovies = moviesData.filter(movie => movie.category === "Drama");
  const sciFiMovies = moviesData.filter(movie => movie.category === "Sci-Fi");
  const crimeMovies = moviesData.filter(movie => movie.category === "Crime");

  return (
    <div>
      <div
        className="hero-section"
        style={{ backgroundImage: `url(${featuredMovie.image})` }}
      >
        <h1>{featuredMovie.title}</h1>
        <p>{featuredMovie.description}</p>
      </div>

      <MovieRow title="Action Movies" movies={actionMovies} rowId="row-action" />
      <MovieRow title="Sci-Fi Movies" movies={sciFiMovies} rowId="row-scifi" />
      <MovieRow title="Drama" movies={dramaMovies} rowId="row-drama" />
      <MovieRow title="Crime" movies={crimeMovies} rowId="row-crime" />
    </div>
  );
};

export default Home;
