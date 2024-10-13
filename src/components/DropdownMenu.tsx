// Dropdown component.
import DropdownOptions from "./DropdownOptions";

interface Props {
  inputName: string;
  itemArray: string[];
}

const DropdownMenu = ({ inputName, itemArray }: Props) => {


  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle form-label"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {inputName}
      </button>
      <DropdownOptions itemsArray={itemArray} />
    </div>
  );
};

export default DropdownMenu;
