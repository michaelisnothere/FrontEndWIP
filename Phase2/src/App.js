import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Fetch from './Fetch';  // Changed from MovieReviewList
import Header from './Header';
import HomePage from './HomePage';  // Corrected case
import MovieReviewSearch from './SearchBar';

function App() {
  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/moviereviews" element={<Fetch />} />
          <Route path="/search" element={<MovieReviewSearch />} />
        </Routes>
      </div>
    </div>
  );
}
export default App;