import React from 'react';
import { OrderFormProps } from '../types';
import { useAuthContext } from '../AuthContext';

const PersonalInfoStep: React.FC<OrderFormProps> = ({ onDataChange }) => {
    const {userData} = useAuthContext();

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange({ name: event.target.value });
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange({phone: event.target.value });
    };

    const handleCarNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onDataChange({carNumber: event.target.value });
    };

    return (
        <div>
            <h2>Введите личную информацию</h2>
            <input type="text" placeholder="Имя" value={userData.firstName} onChange={handleNameChange}/>
            <input type="tel" placeholder="Телефон" value={userData.phoneNumber} onChange={handlePhoneChange} />
            <input type="text" placeholder="Номер машины" value={userData.carNumber} onChange={handleCarNumberChange}/>
        </div>
    );
};

export default PersonalInfoStep;
