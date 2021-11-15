import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import MovieCard, { MovieCardProps } from '../../components/MovieCard/MovieCard';
import routes from '../../constants/apiRoutes';
import WishlistContext from '../../context/wishlist/WishlistContext';

import './Wishlist.scss';

const getMovieCall = (id: string) => {
  const BASE_API_URL = process.env.REACT_APP_MOVIE_API_URL ?? '';
  const API_KEY = process.env.REACT_APP_MOVIE_API_KEY ?? '';
  const { getMovieDetail } = routes;

  return axios.get(`${BASE_API_URL}/${getMovieDetail}/${id}?api_key=${API_KEY}`)
}

const Wishlist = () => {
  const [movies, setMovies] = useState<MovieCardProps[]>([]);
  const { movieIds } = useContext(WishlistContext);

  useEffect(() => {
    const BASE_CONTENT_URL = process.env.REACT_APP_BASE_CONTENT_URL ?? '';

    const getMovies = async () => {
      try {
        const results = await Promise.all(movieIds!.map(id => getMovieCall(id)));
        setMovies(() => {
          return results.map(r => {
            const movie = r.data;

            return {
              id: movie.id,
              image: `${BASE_CONTENT_URL}${movie.poster_path}`,
              overview: movie.overview as string,
              title: movie.original_title,
              year: movie.release_date.split('-')[0]
            };
          })
        })
      } catch (error) {
        console.log(error);
      }
    }

    getMovies();
  }, [movieIds]);

  return (
    <div className="wishlist container">
      <h1 className="wishlist__label">My Wishlist</h1>
      <div className="movie-list">
        {movies.map(m => (
          <MovieCard key={m.id} {...m} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist
