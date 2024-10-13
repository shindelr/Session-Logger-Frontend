// Creates dropdown selection menu for the input form.

interface Props {
  itemsArray: string[];
  onChange: (selectedItem: string) => void;
  value: string;
}

const SelectMenu = ({ itemsArray, onChange, value }: Props) => {
  // Handle value change in this field
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedItem = e.target.value;
    onChange(selectedItem);
  };

  return (
    <div>
      <select
        className="form-select"
        aria-label="Default select example"
        onChange={handleSelectChange}
        value={value}
      >
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
