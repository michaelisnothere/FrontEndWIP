import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate(); 
  const moviePosters = [
    'https://m.media-amazon.com/images/I/71c05lTE03L._AC_SY679_.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoKtJvYU72lT4dvLakovt9qLMrInetWtv3SBW2dNZldXKI_9yl',
    'https://m.media-amazon.com/images/I/81NIli1PuqL._AC_SY679_.jpg',
    'https://m.media-amazon.com/images/I/71fH9xH0I2L._AC_SY679_.jpg',
    'https://m.media-amazon.com/images/I/81p+xe8cbnL._AC_SY679_.jpg',
  ];

  const [currentPoster, setCurrentPoster] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPoster((prevPoster) => (prevPoster + 1) % moviePosters.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, [moviePosters.length]);

  const handleExploreClick = () => {
    navigate('/moviereviews'); 
  };

  return (
    <div className="homepage-container">
      <div className="poster-wrapper">
        <img
          src={moviePosters[currentPoster]}
          alt={`Movie poster ${currentPoster + 1}`}
          className="movie-poster"
        />
      </div>
      <div className="homepage-content">
        <h1 className="homepage-title">Welcome to the NYT Movie Reviews</h1>
        <p className="homepage-description">
          Explore insightful reviews on the latest movies and discover your next watch.
        </p>
        <button className="homepage-button" onClick={handleExploreClick}>
          Explore Reviews
        </button>
      </div>
    </div>
  );
}

export default HomePage;
