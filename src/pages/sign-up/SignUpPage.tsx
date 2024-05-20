import { Input, Button } from "antd";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Select } from 'antd';
const { Option } = Select;

export default function SignUpPage() {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');
    const [selectedRole, setSelectedRole] = useState('');

    const handleOpenHomePage = () => {
        if(role === 'client') {
            navigate("/home");
        }
        else
        {
            navigate("/carwashes/");
        } 
    }

    const handleChange = (value : string) => {
        localStorage.setItem('role', value);
        console.log(value); // Здесь вы можете обработать выбранное значение
      };

    return (
        <>
            <div>
                <h2>Зарегистироваться</h2>
                <Input type='text' placeholder='Номер телефона*'/>
                <Input type='text' placeholder='Почта'/>
                <Input type='text' placeholder='ФИО*'/>
                <Select
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Выберите роль"
                    optionFilterProp="children"
                    onChange={handleChange}
                    >
                    <Option value="client">Клиент</Option>
                    <Option value="owner">Владелец автомойки</Option>
                    </Select>
                <Input type='text' placeholder='Придумайте пароль'/>
                <Input type='text' placeholder='Повторите пароль'/>
                <Button className="profile-page-button" onClick={handleOpenHomePage}>Зарегистрироваться</Button>
                <NavLink to="/">Есть аккаунт? Войдите!</NavLink>
            </div>
        </>
    );
};