import { Input, Button } from "antd";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './LoginPage.scss'


export default function LoginPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event: any) => {
        // event.preventDefault(); // Предотвращаем перезагрузку страницы
    
        // try {
        //     // Формируем строку запроса
        //     const queryString = new URLSearchParams({
        //         login: login,
        //         password: encodeURIComponent(password)
        //     }).toString();
    
        //     // Используем ky для отправки запроса
        //     const response = await api.post(`login?${queryString}`, {
        //         headers: {
        //             'Content-Type': 'application/x-www-form-urlencoded',
        //             'Accept': 'application/json',
        //             'Authorization': 'Bearer '
        //         },
        //     });
    
        //     if (!response.ok) {
        //         throw new Error('Неправильный логин или пароль');
        //     }
    
        //     const data : any = await response.json();

        //     const userId = data.subject;
        //     const role = data.issuer;
        //     localStorage.setItem('token', data.payload);
        //     localStorage.setItem('role', role);
        //     localStorage.setItem('userId', userId);

        //     if (role === "client") {
        //         navigate('/home');
        //     } else if (role === "owner") {
        //         navigate('/carwashes');
        //     }
        //     alert('Вы успешно вошли в систему.');
        // } catch (error) {
        //     console.error(error);
        //     alert('Неправильный логин или пароль');
        // }
        localStorage.getItem('role') === "client" ? navigate('/home') : navigate('/carwashes');
    };

    return (
        <>
            <div className="login-main-container">
                <h2 className="login-main-title">Войти в аккаунт</h2>
                <form onSubmit={handleSubmit}>
                    <Input className='login-input' type='text' value={login} placeholder='Почта или телефон' onChange={(e) => setLogin(e.target.value)} required/>
                    <Input className='login-input' type='password' value={password} placeholder='Пароль' onChange={(e) => setPassword(e.target.value)} required />
                    <Button className="login-button" htmlType="submit">Войти</Button>
                </form>
                <Link className='login-link' to="/sign-up">Нет аккаунта? Создайте его!</Link>
            </div>
        </>
    );
}
