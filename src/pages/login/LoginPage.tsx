import { Input, Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { fakeAPI } from "../../components/fake-api/fakeApi";
import ky from 'ky';

// Не работает
export default function LoginPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
            // Use Ky to send the login request
            const response = await ky.post(fakeAPI + 'users/', {
                json: data,
            });
            if (!response.ok) {
                throw new Error('Login failed');
            }
            navigate('/');
        } catch (error) {
            console.error('There has been a problem with your login operation:', error);
        }
    };

    return (
        <>
            <div>
                <h2>Войти в аккаунт</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input type='text' placeholder='Почта или телефон' {...register("email", { required: true, pattern: /^[A-Za-z0-9]+$/i })}/>
                    <Input type='password' placeholder='Пароль' {...register("password", { required: true })}/>
                    <Button className="profile-page-button" type="submit">Войти</Button>
                </form>
                <NavLink to="/sign-up">Нет аккаунта? Создайте его!</NavLink>
            </div>
        </>
    );
};