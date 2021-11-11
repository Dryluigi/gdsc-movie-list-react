import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';
import Detail from './pages/Detail/Detail';

import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

const App = () => {
  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/detail/:movieId" element={<Detail />} />
          <Route path="/s/:query" element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;