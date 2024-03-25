// Creates dropdown selection menu for the input form.

interface Props {
  itemsArray: string[];
}

const SelectMenu = ({ itemsArray }: Props) => {
  return (
    <div>
      <select className="form-select" aria-label="Default select example">
        <option>Select a spot</option>
        {itemsArray.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectMenu;
