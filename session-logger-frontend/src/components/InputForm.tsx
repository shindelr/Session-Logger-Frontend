// The input form for the spot surfed at and the time surfed. Should be a form
// containing a dropdown for surf spots, two input fields for time, a star rating,
// and a submit button.

import DropdownMenu from "./DropdownMenu";

const InputForm = () => {
  const surfSpots: string[] = ["Agate Beach", "Otter Rock", "South Beach"];

  //   Generate times of day by half hour increments
  const timeGenerator = () => {
    const times: string[] = [];

    const start = new Date();
    start.setHours(1, 0, 0, 0);

    const end = new Date();
    end.setHours(12, 0, 0, 0);

    debugger;

    for (
      let curr = new Date(start);
      curr.getTime() <= end.getTime();
      curr.setMinutes(curr.getMinutes() + 30)
    ) {
      const result = curr.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      });
      times.push(result);
    }
    return times;
  };

  const AMPM: string[] = ["AM", "PM"];

  return (
    <form>
      <div className="mb-3">
        <label className="form-label"> Where'd ya surf?</label>
        <DropdownMenu inputName="Select a spot" itemArray={surfSpots} />

        <label className="form-label"> What time did you get in?</label>
        <div className="Time-In">
          <DropdownMenu inputName="Select a time" itemArray={timeGenerator()} />
          <DropdownMenu inputName="AM/PM" itemArray={AMPM} />
        </div>

        <label className="form-label"> What time did you get out?</label>
        <div className="Time-Out">
          <DropdownMenu inputName="Select a time" itemArray={timeGenerator()} />
          <DropdownMenu inputName="AM/PM" itemArray={AMPM} />
        </div>

            

      </div>
    </form>
  );
};

export default InputForm;
