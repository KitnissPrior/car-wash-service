import React from 'react';
import { OrderFormProps } from '../types';

const PersonalInfoStep: React.FC<OrderFormProps> = ({ data, onDataChange }) => {
    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange({...data, name: event.target.value });
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange({...data, phone: event.target.value });
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
