import React from 'react';


const StarRating = ({ rating }) => {
  // Create an array of stars based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < rating ? 'star-filled' : 'star-empty'}>&#9733;</span>
  ));

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;
