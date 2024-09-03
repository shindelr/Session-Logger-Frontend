import React, { useState } from "react";
import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-date-picker.css";
import "react-datepicker/dist/react-datepicker-cssmodules.css"

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

interface Props {
    onChange: (selectedDate: any) => void;
    value: any;
}

const DateInput = ({ onChange, value }: Props) => {
    const [date, setDate] = useState<any>(value);

    const handleDateChange = (selectedDate: any) => {
        setDate(selectedDate);
        onChange(selectedDate);
    }

    return (
        <>
            <DatePicker
                onChange={handleDateChange}
                value={date}
            />
        </>
    );
}

export default DateInput;
