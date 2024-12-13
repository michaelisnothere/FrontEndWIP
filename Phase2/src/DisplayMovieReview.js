import React from 'react';
import './DisplayMovieReview.css'; 

function DisplayMovieReview({ review }) {
  const { display_title, summary_short, byline, publication_date } = review;

  return (
    <div className="review-card">
      <h3 className="review-title">{display_title}</h3>
      <p className="review-summary">{summary_short}</p>
      <p className="review-byline">
        <strong>Reviewer:</strong> {byline}
      </p>
      <p className="review-date">
        <strong>Published on:</strong> {publication_date}
      </p>
    </div>
  );
}

export default DisplayMovieReview;
