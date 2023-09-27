import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = ({ totalStars, initialRating }) => {
    const [rating, setRating] = useState(initialRating || 0);

    const handleStarClick = (starIndex) => {
        setRating(starIndex + 1);
    };

    return (
        <div>
            {[...Array(totalStars).keys()].map((starIndex) => (
                <FaStar
                    key={starIndex}
                    onClick={() => handleStarClick(starIndex)}
                    style={{
                        cursor: "pointer",
                        color: starIndex < rating ? "gold" : "gray",
                    }}
                />

            ))}
        </div>
    );
};

export default StarRating;
