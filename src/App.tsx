import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.scss';

import Home from './pages/Home/Home';
import Search from './pages/Search/Search';

const App = () => {
  return (
    <div className="App">
      <main className="main">
        <Routes>
          <Route path="/s/:query" element={<Search />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;