import React, { useState } from 'react';
import Ratings from '../Ratings/Ratings';
import axios from 'axios';
export default function Comment({ watch, getWatchDetail }) {
    const [comment, setComment] = useState('');
    const [rating, setRating] = useState(0);
    const user = JSON.parse(localStorage.getItem('user'));
    const handleSubmit = async () => {
        const res = await axios.post('http://localhost:5000/comments', {
            watchId: watch._id,
            userId: user._id,
            rating: rating,
            content: comment,
        });
        getWatchDetail();
        setComment('');
        setRating(0);
    };
    return (
        <div>
            {' '}
            <div className="w-full px-4">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">Your comment</h2>
                    <Ratings rating={rating} setRating={setRating} />
                </div>
                <div className="mb-6">
                    <div className="flex justify-center">
                        <div className="w-12 h-12 bg-gray-800 rounded-full flex justify-center items-center">
                            <span className="text-white text-xl">H</span>
                        </div>
                        <div className="ml-5 py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-full">
                            <label for="comment" className="sr-only">
                                Your comment
                            </label>

                            <textarea
                                onChange={(e) => {
                                    setComment(e.target.value);
                                }}
                                id="comment"
                                rows="6"
                                className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                                placeholder="Write a comment..."
                                required
                                value={comment}
                            ></textarea>
                        </div>
                    </div>
                    <div className="float-end">
                        <button
                            onClick={handleSubmit}
                            className="inline-flex justify-end items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
                        >
                            Post comment
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
