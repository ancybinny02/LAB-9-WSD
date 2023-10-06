import React from 'react'
import '../styles/BookCard.css'

const BookCard = ({ book, review, onReviewChange, onReviewSubmit, submittedReview }) => {
    return (
        <div className="book-card">
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <p>Author: {book.author}</p>
            <p>Price: {book.price}</p>
            <p>Description: {book.description}</p>
            {/* check if review is submitted? */}
            {submittedReview?.submitted ? (
                <div>
                    <p>Review:</p>
                    <p>{submittedReview.review}</p>
                </div>
            ) : (
                <form>
                    <label htmlFor={`review-${book.id}`}>Write a Review:</label>
                    <textarea
                        id={`review-${book.id}`}
                        name="review"
                        value={review?.review || ''}
                        onChange={onReviewChange}
                        rows="10"
                        cols="30"
                    />
                    <button
                        className='button'
                        type="button"
                        onClick={() => {
                            onReviewSubmit(); // Submit the review
                        }}
                    >
                        Submit Review
                    </button>
                </form>
            )}
        </div>
    );
};

export default BookCard