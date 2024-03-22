// Implementation of a time picking dropdown. Creates a list of times in half
// hour increments for reasonable times of day to be surfing. Users can pick
// from those.

import DropdownOptions from "./DropdownOptions";


interface Props {
    times: string[]
}

const TimeInput = ({ times }: Props) => {

  return (

    <DropdownOptions itemsArray={times}/>

  );
};

export default TimeInput;
