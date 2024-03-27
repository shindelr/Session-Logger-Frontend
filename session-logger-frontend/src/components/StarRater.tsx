// Creates a five star rating system for the input form.

import { useState } from "react";

interface Props {
  onChange: (selectedRating: number) => void;
}

const StarRater = ({ onChange }: Props) => {
  const [rating, setRating] = useState(1);
  const starArray: number[] = [0, 1, 2, 3, 4];

  const handleClick = (starIndex: number) => {
    setRating(starIndex);
    console.log(starIndex);
    onChange(starIndex)
  };

  return (
    <div id="star-rating>">
      {starArray.map((_, index) => (
        <span
          key={index}
          className={index < rating ? "star-filled" : "star"}
          onClick={() => handleClick(index + 1)}
        >
          &#9733; {/* This number creates the star shape itself */}
        </span>
      ))}
    </div>
  );
};

export default StarRater;
