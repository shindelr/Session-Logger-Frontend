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

  const formData = {
    spot,
    timeIn,
    timeOut,
    rating,
  };

  return (
    <form>
      <div className="mb-3">
        <div id="spot-select-container">
          <label className="form-label"> Where'd ya surf?</label>
          <SelectMenu
            itemsArray={surfSpots}
            onChange={(selectedSpot: string) => {
              setSpot(selectedSpot);
              console.log(formData);
            }}
          />
        </div>

        <div id="time-in-container">
          <label className="form-label"> What time did you get in?</label>
          <TimeInput
            onChange={(selectedTime: string) => {
              setTimeIn(selectedTime);
              console.log(formData);
            }}
          />
        </div>

        <div id="time-out-container">
          <label className="form-label"> What time did you get out?</label>
          <TimeInput
            onChange={(selectedTime: string) => {
              setTimeIn(selectedTime);
              console.log(formData);
            }}
         />
        </div>

        <div id="sesh-rating-container">
          <label className="form-label">How would you rate your session?</label>
          <StarRater />
        </div>

        <div id="submit-btn-container">
          <Button buttonType="primary" label="Submit" />
        </div>
      </div>
    </form>
  );
};

export default InputForm;
