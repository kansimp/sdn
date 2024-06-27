import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function Ratings({ rating, setRating }) {
    const [hover, setHover] = useState(null);
    console.log('rating', rating);
    return (
        <div className="flex text-center justify-center">
            {[...Array(3)].map((star, index) => {
                const ratingValue = index + 1;

                return (
                    <label key={index}>
                        <input
                            type="radio"
                            name="rating"
                            value={ratingValue}
                            onClick={() => setRating(ratingValue)}
                            style={{ display: 'none' }}
                        />
                        <FaStar
                            size={30}
                            color={ratingValue <= (hover || rating) ? 'gold' : 'gray'}
                            onMouseEnter={() => setHover(ratingValue)}
                            onMouseLeave={() => setHover(null)}
                            style={{ cursor: 'pointer', transition: 'color 200ms' }}
                        />
                    </label>
                );
            })}
        </div>
    );
}
