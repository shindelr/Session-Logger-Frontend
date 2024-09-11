import { ChangeEvent, useState } from "react";

interface Props {
  type: string;
  id: string;
  placeholder: string;
  value: string | number;
  onChange: (inputValue: string | number) => void;
}

const ReqInput = ({ type, id, placeholder, onChange, value}: Props) => {
  const [inputValue, setInputValue] = useState<string | number>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputVal = e.target.value;
    setInputValue(inputVal);
    onChange(inputVal);
    console.log(inputValue);
  };

  return (
    <>
      <div className="mb-3">
        <input
          type={type}
          className="form-control"
          id={id}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleChange}
          required
        />
      </div>
    </>
  );
};

export default ReqInput;
