// The input form for the spot surfed at and the time surfed. Should be a form
// containing a dropdown for surf spots, two input fields for time, a star rating,
// and a submit button.

import SelectMenu from "./SelectMenu";
import TimeInput from "./timeInput";
import StarRater from "./StarRater";

const InputForm = () => {
  const surfSpots: string[] = ["Agate Beach", "Otter Rock", "South Beach"];

  return (
    <form>
      <div className="mb-3">
        <div id="spot-select-container">
          <label className="form-label"> Where'd ya surf?</label>
          <SelectMenu itemsArray={surfSpots} />
        </div>

        <div id="time-in-container">
          <label className="form-label"> What time did you get in?</label>
          <TimeInput />
        </div>

        <div id="time-out-container">
          <label className="form-label"> What time did you get out?</label>
          <TimeInput />
        </div>

        <div id="sesh-rating-container">
            <label className="form-label">How would you rate your session?</label>
            <StarRater />
         </div>

      </div>
    </form>
  );
};

export default InputForm;
