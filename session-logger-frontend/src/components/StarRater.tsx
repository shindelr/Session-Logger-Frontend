// Creates a five star rating system for the input form.

import { useState } from "react";

interface Props {
  onChange: (selectedRating: number | null) => void;
  value: number | null;
}

const StarRater = ({ onChange, value }: Props) => {
  const [rating, setRating] = useState(value);
  const starArray: number[] = [0, 1, 2, 3, 4];

  // Quick little update to help the form reset after submission
  rating != value ? setRating(value) : rating;

  const handleClick = (starIndex: number) => {
    setRating(starIndex);
    console.log(starIndex);
    onChange(starIndex);
  };

  // Wrote this func so rating & value could be null | number
  const dynamicClassName = (index: number) => {
    if (rating) {
      return index < rating ? "star-filled" : "star";
    } else {
      return "star";
    }
  };

  return (
    <div id="star-rating>">
      {starArray.map((_, index) => (
        <span
          key={index}
          className={dynamicClassName(index)}
          onClick={() => handleClick(index + 1)}
        >
          &#9733; {/* This number creates the star shape itself */}
        </span>
      ))}
    </div>
  );
};

export default StarRater;
