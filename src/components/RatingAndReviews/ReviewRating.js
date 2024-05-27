import React, { useState, useEffect } from 'react';
import NavBar from '../HomePage/NavBar';
import Footer from '../HomePage/Footer';

const ReviewRating = () => {
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const storedReviews = localStorage.getItem('reviews');
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);

  const handleRatingClick = (selectedRating) => {
    setRating(selectedRating === rating ? 0 : selectedRating);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (rating === 0) {
      alert("Please select a rating.");
      return;
    }
    setIsSubmitting(true);
    const newReview = {
      rating: rating,
      comment: comment,
      name: name,
      location: location,
      date: new Date().toISOString().slice(0, 10),
    };
    setReviews([...reviews, newReview]);
    setRating(0);
    setComment('');
    setName('');
    setLocation('');
    setIsSubmitting(false);
  };

  const renderStars = (count) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={i <= count ? "cursor-pointer text-yellow-500" : "cursor-pointer"}
          onClick={() => handleRatingClick(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="container mx-auto bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold mb-4 text-center text-green-500">Rate and Review Us</h2>
        <form onSubmit={handleSubmit} className="mb-8">
          <div className="mb-4 flex items-center justify-center">
            <label className="block mb-2 text-lg mr-4">Rate our service:</label>
            <div className="flex">{renderStars(rating)}</div>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg" htmlFor="comment">Write your review:</label>
            <textarea
              id="comment"
              className="border rounded-md p-2 w-full"
              rows="4"
              value={comment}
              onChange={handleCommentChange}
              placeholder="Write your review here..."
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg" htmlFor="name">Your Name:</label>
            <input
              type="text"
              id="name"
              className="border rounded-md p-2 w-full"
              value={name}
              onChange={handleNameChange}
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-lg" htmlFor="location">Your Location:</label>
            <input
              type="text"
              id="location"
              className="border rounded-md p-2 w-full"
              value={location}
              onChange={handleLocationChange}
              placeholder="Your Location"
            />
          </div>
          <button 
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-yellow-400 w-1/2 mx-auto block"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
        <div className="bg-gray-200 p-4 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h3>
          <ul>
            {reviews.map((review, index) => (
              <li key={index} className="mb-4 border-b pb-4">
                <p className="font-semibold mb-1">Rating: {renderStars(review.rating)}</p>
                <p>Review: {review.comment}</p>
                <p>Name: {review.name}</p>
                <p>Location: {review.location}</p>
                <p>Date: {review.date}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ReviewRating;
