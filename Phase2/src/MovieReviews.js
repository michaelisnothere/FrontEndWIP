import React from 'react';
import DisplayMovieReview from './DisplayMovieReview';  

function MovieReviews({ reviews }) {
  return (
    <div className="review-list">
      {reviews.map((review, index) => (
        <DisplayMovieReview key={index} review={review} /> 
      ))}
    </div>
  );
}

export default MovieReviews;
