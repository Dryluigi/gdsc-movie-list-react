import React from 'react';

import './MovieCard.scss';

export interface MovieCardProps {
  title: string;
  overview: string;
  image: string;
};

const MovieCard: React.FC<MovieCardProps> = (props) => {
  return (
    <div className="movie-card">
      <img className="movie-card__poster" src={props.image} alt="movie_poster" />
      <div className="movie-card__info">
        <p className="movie-card__title">{props.title}</p>
        <p className="movie-card__description">{props.overview}</p>
      </div>
    </div>
  );
};

export default MovieCard;