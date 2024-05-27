import { Input, Button } from "antd";
import { useState } from "react";
import {api} from "../../components/api/serverApi";
import { Link, useNavigate } from "react-router-dom";
import './LoginPage.scss'
import { useAuthContext } from "../../components/AuthContext";
import { useUsersQuery, usePeopleQuery } from "../../components/api/userApi";


export default function LoginPage() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const {setUserData }= useAuthContext();
    //const {data: users} = useUsersQuery();
    //const {data: people} = usePeopleQuery();
    const navigate = useNavigate();

    const handleSubmit = async (event: any) => {
        event.preventDefault(); // Предотвращаем перезагрузку страницы
    
        try {
            // Формируем строку запроса
            const queryString = new URLSearchParams({
                login: login,
                password: encodeURIComponent(password)
            }).toString();
    
            // Используем ky для отправки запроса
            const response = await api.post(`login?${queryString}`, {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json',
                    'Authorization': 'Bearer '
                },
            });
            console.log(response);
    
            if (!response.ok) {
                throw new Error('Ошибка авторизации');
            }
    
            const data : any = await response.json();
            for (let key in data)
                if (Object.prototype.hasOwnProperty.call(data, key)) {
                    console.log(`${key}: ${data[key]}`);
                }

            //const userId = data.subject;
            // const user = users?.filter(u => u.userId == userId)[0];
            // const personData = people?.filter(p => p.personId == user?.personId)[0];
            // const newUserData = {
            //     userId: user?.userId,
            //     login: user?.login,
            //     roleId: user?.roleId,
            //     personId: user?.personId,
            //     firstName: personData?.firstName,
            //     lastName: personData?.lastName,
            //     fathersName: personData?.fathersName,
            //     email: personData?.email,
            //     phoneNumber: personData?.phoneNumber,
            //     role: "owner"
            // }
    
            // setUserData(newUserData);
    
            alert('Вы успешно вошли в систему.');
            //window.location.href = '/';
        } catch (error) {
            console.error(error);
            alert('Произошла ошибка при попытке войти в систему.');
        }
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
