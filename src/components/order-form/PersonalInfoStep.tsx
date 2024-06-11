import React from 'react';

const PersonalInfoStep: React.FC<{ data: any; onDataChange: (data: any) => void; shouldGoNext: (shouldGoNext: boolean) => void }> = ({ data, onDataChange, shouldGoNext }) => {
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange({...data, name: event.target.value });
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange({...data, phone: event.target.value });
        //shouldGoNext(true);
    };

    return (
        <div>
            <h2>Введите личную информацию</h2>
            <input type="text" placeholder="Имя" onChange={handleNameChange} />
            <input type="tel" placeholder="Телефон" onChange={handlePhoneChange} />
            <input type="text" placeholder="Номер машины" />
        </div>
    );
};

export default PersonalInfoStep;
