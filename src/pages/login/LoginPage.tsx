import { Input, Button } from "antd";
import { NavLink } from "react-router-dom";
import  { useState } from "react";
import {api} from "../../components/api/serverApi";


export default function LoginPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
    
        try {
            // Формируем строку запроса
            const queryString = new URLSearchParams({
                login: encodeURIComponent(login),
                password: encodeURIComponent(password)
            }).toString();
    
            // Используем ky для отправки запроса
            const response = await api.post(`login?${queryString}`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                },
            });
    
            if (!response.ok) {
                throw new Error('Ошибка авторизации');
            }
    
            const data = await response.json();
            localStorage.setItem('token', JSON.stringify(data)); // Сохраняем токен в localStorage (data.token)
            const token = localStorage.getItem('token');
            const decodedToken = token? JSON.parse(token).token : null;
            console.log(decodedToken);
    
            alert('Вы успешно вошли в систему.');
        } catch (error) {
            console.error(error);
            alert('Произошла ошибка при попытке войти в систему.');
        }
    };

    return (
        <>
            <div>
                <h2>Войти в аккаунт</h2>
                <form onSubmit={handleSubmit}>
                    <Input type='text' value={login} placeholder='Почта или телефон' onChange={(e) => setLogin(e.target.value)} required/>
                    <Input type='password' value={password} placeholder='Пароль' onChange={(e) => setPassword(e.target.value)} required />
                    <Button className="profile-page-button" htmlType="submit">Войти</Button>
                </form>
                <NavLink to="/sign-up">Нет аккаунта? Создайте его!</NavLink>
            </div>
        </>
    );
}
