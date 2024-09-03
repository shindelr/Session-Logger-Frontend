// The input form for the spot surfed at and the time surfed. Should be a form
// containing a dropdown for surf spots, two input fields for time, a star rating,
// and a submit button.

import SelectMenu from "./SelectMenu";
import TimeInput from "./timeInput";
import StarRater from "./StarRater";
import Button from "./SubmitButton";
import { useState } from "react";
import axios from "axios";
import DateInput from "./DateInput";

const InputForm = () => {
  const surfSpots: string[] = ["Agate Beach", "Otter Rock", "South Beach"];
  //   State fields for the form
  const [spot, setSpot] = useState("");
  const [timeIn, setTimeIn] = useState("");
  const [timeOut, setTimeOut] = useState("");
  const [rating, setRating] = useState<null | number>(null);
  const [loadBool, setLoadBool] = useState(false);
  const [date, setDate] = useState<Date>(new Date())

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoadBool(true);

    // Store form data
    const formData = {
      spot,
      timeIn,
      timeOut,
      rating,
      date
    };

    // Check to make sure the data was saved
    console.log(formData);

    // Try to post the data to the backend
    try {
      const response = await axios.post(
        // "http://localhost:5001/session_form_submission",
        "http://192.168.4.28:5001/session_form_submission",
        formData
      );
      console.log(response.data);
      setLoadBool(false);
      alert("Success!");
    } catch (error) {
      console.log("Error: " + error);
      setLoadBool(false);
      alert("Something went wrong. Try again please.");
    }

    // Reset State Values
    setSpot("");
    setTimeIn(Date.now().toString());
    setTimeOut("");
    setDate(new Date());
    setRating(null);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">

        <div id="spot-select-container">
          <label className="form-label"> Where'd ya surf?</label>
          <SelectMenu
            itemsArray={surfSpots}
            value={spot}
            onChange={(selectedSpot: string) => {
              setSpot(selectedSpot);
            }}
          />
        </div>

        <div id="date-input-container">
          <label className="form-label"> What day did you surf?</label>
          <DateInput
            onChange={(selectedDate: Date) => {setDate(selectedDate)}}
            selected={date}
          />
        </div>

        <div id="time-in-container">
          <label className="form-label"> What time did you get in?</label>
          <TimeInput
            value={timeIn}
            onChange={(selectedTime: string) => {
              setTimeIn(selectedTime);
            }}
          />
        </div>

        <div id="time-out-container">
          <label className="form-label"> What time did you get out?</label>
          <TimeInput
            value={timeOut}
            onChange={(selectedTime: string) => {
              setTimeOut(selectedTime);
            }}
          />
        </div>

        <div id="sesh-rating-container">
          <label className="form-label">How would you rate your session?</label>
          <StarRater
            value={rating}
            onChange={(selectedStars: number | null) => {
              setRating(selectedStars);
            }}
          />
        </div>

        <div id="submit-btn-container">
          <Button
            buttonType="primary"
            label="Submit"
            loadBool={loadBool}
            onClick={() => {
              handleSubmit;
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default InputForm;
