import React, { useState } from 'react';
import './MovieReviewSearch.css';

function MovieReviewSearch() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState('');
    const API_KEY = 'qGKx0B7blVkJusX0LI1dOOlBX0SHwfUL';

    const searchMovieReviews = async (searchQuery) => {
        setLoading(true);
        setQuery(searchQuery);
        setPage(0);
        try {
            const response = await fetch(
                `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(searchQuery)}&fq=section_name:("Movies") AND type_of_material:("Review")&sort=newest&page=0&api-key=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch reviews');
            }

            const data = await response.json();
            setReviews(data.response.docs);
            setLoading(false);
        } catch (error) {
            console.error('Search error:', error);
            setReviews([]);
            setLoading(false);
        }
    };

    const loadMoreReviews = async () => {
        if (!query) return;
        const nextPage = page + 1;
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${encodeURIComponent(query)}&fq=section_name:("Movies") AND type_of_material:("Review")&sort=newest&page=${nextPage}&api-key=${API_KEY}`
            );

            if (!response.ok) {
                throw new Error('Failed to fetch more reviews');
            }

            const data = await response.json();
            setReviews(prevReviews => [...prevReviews, ...data.response.docs]);
            setPage(nextPage);
            setLoading(false);
        } catch (error) {
            console.error('Load more error:', error);
            setLoading(false);
        }
    };

    return (
        <div className="movie-review-search">
            <div className="search-bar-container">
                <input
                    type="text"
                    className="search-bar"
                    placeholder="Search for movie reviews..."
                    onChange={(e) => setQuery(e.target.value)}
                />
                <button
                    className="search-button"
                    onClick={() => searchMovieReviews(query)}
                >
                    Search
                </button>
            </div>

            {loading && <p>Loading reviews...</p>}

            {reviews.length > 0 ? (
                <>
                    <MovieReviews reviews={reviews} />
                    {!loading && <LoadMoreButton onClick={loadMoreReviews} />}
                </>
            ) : (
                !loading && <p>No reviews found. Try another search.</p>
            )}
        </div>
    );
}

export default MovieReviewSearch;
