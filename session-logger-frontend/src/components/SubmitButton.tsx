// Creates a button that you can label whatever you'd like and set the class
// of as well. Clicking the button toggles the loading animation on and off.

import { useState } from "react";

interface Props {
  buttonType: string;
  label: string;
}

const SubmitButton = ({ buttonType, label }: Props) => {
  const [loading, setLoading] = useState(false);
  const btnClassPrefix = "btn btn-";
  const spinner = "spinner-border spinner-border-sm";

  const handleClick = () => {
    setLoading(loading ? false : true);
  };

  return (
    <button
      type="submit"
      className={btnClassPrefix + buttonType}
      onClick={handleClick}
    >
      <span className={loading ? spinner : ""} aria-hidden="true"></span>
      {loading ? "" : label}  {/* Display the label, otherwise display loading animation */}
    </button>
  );
};

export default SubmitButton;
