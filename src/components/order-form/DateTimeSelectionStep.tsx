import React from 'react';
import { OrderFormProps } from '../types';

const DateTimeSelectionStep: React.FC<OrderFormProps> = ({ data, onDataChange }) => {
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange({...data, date: event.target.value });
    };

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange({...data, time: event.target.value });
    };

    return (
        <div>
            <h2>Выберите дату и время</h2>
            <input type="date" onChange={handleDateChange} />
            <input type="time" onChange={handleTimeChange} />
        </div>
    );
};

export default DateTimeSelectionStep;
