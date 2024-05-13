import React from 'react';

const ServiceSelectionStep: React.FC<{ data: any; onDataChange: (data: any) => void; shouldGoNext: (shouldGoNext: boolean) => void }> = ({ data, onDataChange, shouldGoNext }) => {
    const handleServiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        onDataChange({ ...data, service: event.target.value });
        shouldGoNext(true);
    };

    return (
        <div>
            <h2>Выберите услугу</h2>
            <select onChange={handleServiceChange}>
                <option value="">Выберите услугу</option>
                <option value="carWash">Мойка автомобиля</option>
                <option value="oilChange">Замена масла</option>
                <option value="tireChange">Замена шин</option>
            </select>
        </div>
    );
};

export default ServiceSelectionStep;
