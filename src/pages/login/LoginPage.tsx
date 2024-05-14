import { Input, Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth0 } from '@auth0/auth0-react';

// Не работает
export default function LoginPage() {
    const { loginWithRedirect, isAuthenticated, getAccessTokenSilently } = useAuth0();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if(!isAuthenticated) {
            loginWithRedirect();
            return
        }

        try {
            const token = await getAccessTokenSilently();
            console.log(token);
        } catch (e) {
            console.error("Ошибка при получении токена", e);
        }

    };

    return (
        <>
            <div>
                <h2>Войти в аккаунт</h2>
                <form onSubmit={handleSubmit}>
                    <Input type='text' value={email} placeholder='Почта или телефон' onChange={(e) => setEmail(e.target.value)} required/>
                    <Input type='password' value={username} placeholder='Пароль' onChange={(e) => setUsername(e.target.value)} required />
                    <Button className="profile-page-button" type="submit">Войти</Button>
                </form>
                <NavLink to="/sign-up">Нет аккаунта? Создайте его!</NavLink>
            </div>
        </>
    );
};