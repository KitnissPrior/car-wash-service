import { Input, Button } from "antd";
import { NavLink } from "react-router-dom";

export default function SignUpPage() {
    return (
        <>
            <div>
                <h2>Зарегистироваться</h2>
                <Input type='text' placeholder='Номер телефона*'/>
                <Input type='text' placeholder='Почта'/>
                <Input type='text' placeholder='ФИО*'/>
                <Input type='text' placeholder='Придумайте пароль'/>
                <Input type='text' placeholder='Повторите пароль'/>
                <Button className="profile-page-button">Зарегистрироваться</Button>
                <NavLink to="/login">Есть аккаунт? Войдите!</NavLink>
            </div>
        </>
    );
};