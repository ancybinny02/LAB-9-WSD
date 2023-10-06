import React, { useState } from 'react'
import '../styles/BookList.css'
import BookCard from './BookCard'
import Books from './Books'

function BookList() {
    const [reviews, setReviews] = useState({});
    const [submittedReviews, setSubmittedReviews] = useState({});
    const [searchQuery, setSearchQuery] = useState('');

    const handleReviewChange = (event, bookId) => {
        const { name, value } = event.target;
        setReviews((prevReviews) => ({
            ...prevReviews,
            [bookId]: { ...prevReviews[bookId], [name]: value },
        }));
    };

    const handleReviewSubmit = (bookId) => {
        if (reviews[bookId]?.review) {
            setSubmittedReviews((prevSubmittedReviews) => ({
                ...prevSubmittedReviews,
                [bookId]: { ...reviews[bookId], submitted: true },
            }));
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredBooks = Books.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return (
        <div >
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search by title..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            <div className="book-list">
                {filteredBooks.map((book) => (
                    <BookCard
                        key={book.id}
                        book={book}
                        review={reviews[book.id]}
                        onReviewChange={(e) => handleReviewChange(e, book.id)}
                        onReviewSubmit={() => handleReviewSubmit(book.id)}
                        submittedReview={submittedReviews[book.id]}
                    />
                ))}
            </div>
        </div>
    )
}

export default BookList