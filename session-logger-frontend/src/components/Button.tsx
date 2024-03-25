// Creates a button that you can label whatever you'd like and set the class
// of as well.

import { useState } from "react";

interface Props {
  buttonType: string;
  label: string;
}

const Button = ({ buttonType, label }: Props) => {
  const [loading, setLoading] = useState(false);
  const btnClassPrefix = "btn btn-";
  const spinner = 'spinner-border spinner-border-sm'

  const handleClick = () => {
    setLoading(loading ? false : true);
    console.log(loading);
  };

  return (
    <button
      type="button"
      className={btnClassPrefix + buttonType}
      onClick={handleClick}
    >
      <span
        className={loading ? spinner : ''}
        aria-hidden="true"
      ></span>
      {loading ? '' : label}
    </button>
  );
};

export default Button;
