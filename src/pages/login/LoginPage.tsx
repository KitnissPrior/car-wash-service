import { Input, Button } from "antd";
import { NavLink } from "react-router-dom";

export default function LoginPage() {
    return (
        <>
            <div>
                <h2>Войти в аккаунт</h2>
                <Input type='text' placeholder='Почта или телефон'/>
                <Input type='text' placeholder='Пароль'/>
                <Button className="profile-page-button">Войти</Button>
                <NavLink to="/sign-up">Нет аккаунта? Создайте его!</NavLink>
            </div>
        </>
    );
};