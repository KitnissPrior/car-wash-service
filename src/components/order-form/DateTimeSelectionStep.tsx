import React from 'react';

const DateTimeSelectionStep: React.FC<{ data: any; onDataChange: (data: any) => void; shouldGoNext: (shouldGoNext: boolean) => void }> = ({ data, onDataChange, shouldGoNext }) => {
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange({...data, date: event.target.value });
        shouldGoNext(true);
    };

    const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange({...data, time: event.target.value });
        shouldGoNext(true);
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
