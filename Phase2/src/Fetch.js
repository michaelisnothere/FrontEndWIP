import React from "react";
import { useState } from "react";

function MovieReviewList(){
    const [review, setReviews] = useState([])


    fetch("https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:(\"Movies\") AND type_of_material:(\"Review\")&sort=newest&page=0&api-key=qGKx0B7blVkJusX0LI1dOOlBX0SHwfUL")
    .then((response) => response.json())
    .then((data) =>  {
        console.log(data)
        setReviews(data.response.docs);
    })
    .catch((error) => {
        console.error(error)
    });

    return(
        <div className="List">
        <h1>Movie Reviews</h1>
        <ul>
            <ul>
                {review.map((review, index) => (
                    <li key={index}>
                        <h2>{review.headline.main}</h2>
                        <p>{review.snippet}</p>
                    </li>
                ))}
            </ul>
        </ul>
        </div>
    
    )
}
export default MovieReviewList

  