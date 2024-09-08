import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
    onChange: (selectedDate: any) => void;
    selected: any;
}

const DateInput = ({ onChange, selected }: Props) => {
    const [date, setDate] = useState<any>(selected);

    const handleDateChange = (selectedDate: any) => {
        setDate(selectedDate);
        onChange(selectedDate);
        selectedDate = selectedDate.toLocaleString("en-US", {timeZone: "America/Los_Angeles"});
    }

    return (
        <>
            <DatePicker
                onChange={handleDateChange}
                selected={date}
                value={date}
            />
        </>
    );
}

export default DateInput;
