import React from 'react';

import './Home.scss';

import Search from '../../components/Search/Search';
import MovieCard from '../../components/MovieCard/MovieCard';

const Home = () => {
  return (
    <>
      <h1 className="text-center home-brand">Movie List</h1>
      <Search />
      <div className="movie-list">
        {[...Array(10)].map(x => (
          <MovieCard key={x} title="Lorem ipsum dolor sit." overview="Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity." image="https://image.tmdb.org/t/p/original/oPxnRhyAIzJKGUEdSiwTJQBa3NM.jpg" />
        ))}
      </div>
    </>
  );
};

export default Home;