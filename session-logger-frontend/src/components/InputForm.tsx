// The input form for the spot surfed at and the time surfed. Should be a form
// containing a dropdown for surf spots, two input fields for time, a star rating,
// and a submit button.

import SelectMenu from "./SelectMenu";
import TimeInput from "./timeInput";
import StarRater from "./StarRater";
import Button from "./SubmitButton";
import { useState } from "react";

const InputForm = () => {
  const surfSpots: string[] = ["Agate Beach", "Otter Rock", "South Beach"];
  //   State fields for the form
  const [spot, setSpot] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      spot,
      timeIn,
      timeOut,
      rating,
    };

    console.log(formData)

    setSpot('')
    setTimeIn('')
    setTimeOut('')
    setRating(0)
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <div id="spot-select-container">
          <label className="form-label"> Where'd ya surf?</label>
          <SelectMenu
            itemsArray={surfSpots}
            onChange={(selectedSpot: string) => {
              setSpot(selectedSpot);
            }}
          />
        </div>

        <div id="time-in-container">
          <label className="form-label"> What time did you get in?</label>
          <TimeInput
            onChange={(selectedTime: string) => {
              setTimeIn(selectedTime);
            }}
          />
        </div>

        <div id="time-out-container">
          <label className="form-label"> What time did you get out?</label>
          <TimeInput
            onChange={(selectedTime: string) => {
              setTimeOut(selectedTime);
            }}
          />
        </div>

        <div id="sesh-rating-container">
          <label className="form-label">How would you rate your session?</label>
          <StarRater
            onChange={(selectedStars: number) => {
              setRating(selectedStars);
            }}
          />
        </div>

        <div id="submit-btn-container">
          <Button buttonType="primary" label="Submit" />
        </div>
      </div>
    </form>
  );
};

export default InputForm;
