// Lists the options that will populate the dropdown menu.
import { useState } from "react";

interface Props {
  itemsArray: string[],
}

const DropdownOptions = ({ itemsArray }: Props) => {
  const [input, setInput] = useState('') ;

  const handleClick = (item: string) => {
    setInput(item)
  }

  return (
    <ul className="dropdown-menu">
      {itemsArray.map((item, index) => (
        <li key={index}>
          <a className="dropdown-item" onClick={() => handleClick(item)}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default DropdownOptions;
