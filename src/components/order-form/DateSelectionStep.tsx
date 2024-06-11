import React, { useState } from 'react';
import { OrderFormProps } from '../types';

const DateSelectionStep: React.FC<OrderFormProps> = ({ data, onDataChange }) => {
    
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange({date: event.target.value });
    };

    return (
        <div>
            <h2>Выберите дату</h2>
            <input type="date" value={data.dateSelection?.date} onChange={handleDateChange} />
        </div>
    );
};

export default DateSelectionStep;
