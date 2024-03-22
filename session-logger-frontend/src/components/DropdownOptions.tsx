// Lists the options that will populate the dropdown menu.

interface Props {
  itemsArray: string[];
}

const DropdownOptions = ({ itemsArray }: Props) => {
  return (
    <ul className="dropdown-menu">
      {itemsArray.map((item, index) => (
        <li key={index}>
          <a className="dropdown-item">{item}</a>
        </li>
      ))}
    </ul>
  );
};

export default DropdownOptions;
