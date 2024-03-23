// Renders a time input component.
interface Props {
//   min: number;
//   max: number;
}

const TimeInput = () => {
  //   Generate times of day by half hour increments
  const timeGenerator = () => {
    const times: string[] = [];

    const start = new Date();
    start.setHours(5, 0, 0, 0);

    const end = new Date();
    end.setHours(22, 0, 0, 0);

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

  let timeList: string[] = timeGenerator();

  return (
    <>
      <datalist id="time-list">
        {timeList.map((item, index) => (
          <option value={item} key={index}></option>
        ))}
      </datalist>
      <input
        type="time"
        list="time-list"
        className="form-label"
        // min={min}
        // max={max
      ></input>
    </>
  );
};

export default TimeInput;
