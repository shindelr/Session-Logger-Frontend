// Creates a button that you can label whatever you'd like and set the class
// of as well. Clicking the button toggles the loading animation on and off.

// import { useState } from "react";

interface Props {
  buttonType: string;
  label: string;
  loadBool: boolean
  onClick: () => void
}

const SubmitButton = ({ buttonType, label, loadBool, onClick }: Props) => {
  // const [loading, setLoading] = useState(false);
  const btnClassPrefix = "btn btn-";
  const spinner = "spinner-border spinner-border-sm";

  // const handleClick = () => {
  //   // setLoading(loadBool ? true : false);

  // };

  return (
    <button
      type="submit"
      className={btnClassPrefix + buttonType}
      // onClick={handleClick}
      onClick={() => {onClick}}
      disabled={loadBool}
    >
      <span className={loadBool ? spinner : ""} aria-hidden="true"></span>
      {loadBool ? "  Loading" : label}  {/* Display the label, otherwise display loading animation */}
    </button>
  );
};

export default SubmitButton;
