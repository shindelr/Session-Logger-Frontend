// The input form for the spot surfed at and the time surfed. Should be a form
// containing a dropdown for surf spots, two input fields for time, a star rating,
// and a submit button.

import DropdownMenu from "./DropdownMenu";
import TimeInput from "./timeInput";

const InputForm = () => {
  const surfSpots: string[] = ["Agate Beach", "Otter Rock", "South Beach"];

  return (
    <form>
      <div className="mb-3">
        <label className="form-label"> Where'd ya surf?</label>
        <DropdownMenu inputName="Select a spot" itemArray={surfSpots} />

        <div>
          <label className="form-label"> What time did you get in?</label>
          <TimeInput />
        </div>

        <div>
          <label className="form-label"> What time did you get out?</label>
          <TimeInput />
        </div>
      </div>
    </form>
  );
};

export default InputForm;
