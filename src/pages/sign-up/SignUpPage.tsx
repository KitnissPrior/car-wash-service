import { Input, Button } from "antd";
import { NavLink, useNavigate } from "react-router-dom";

export default function SignUpPage() {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    const handleOpenHomePage = () => {
        if(role === 'client') {
            navigate("/home");
        }
        else
        {
            navigate("/carwashes/");
        } 
    }

    return (
        <>
            <div>
                <h2>Зарегистироваться</h2>
                <Input type='text' placeholder='Номер телефона*'/>
                <Input type='text' placeholder='Почта'/>
                <Input type='text' placeholder='ФИО*'/>
                <Input type='text' placeholder='Придумайте пароль'/>
                <Input type='text' placeholder='Повторите пароль'/>
                <Button className="profile-page-button" onClick={handleOpenHomePage}>Зарегистрироваться</Button>
                <NavLink to="/">Есть аккаунт? Войдите!</NavLink>
            </div>
        </>
    );
};