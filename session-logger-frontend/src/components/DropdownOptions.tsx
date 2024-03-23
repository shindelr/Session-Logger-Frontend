// Lists the options that will populate the dropdown menu.
import { useState } from "react";

interface Props {
  itemsArray: string[],
}

const DropdownOptions = ({ itemsArray }: Props) => {
  const [input, setInput] = useState('') ;

  return (
    <ul className="dropdown-menu">
      {itemsArray.map((item, index) => (
        <li key={index}>
          <a className="dropdown-item" onClick={() => {setInput(item)}}>{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default DropdownOptions;
