import { Outlet, NavLink } from 'react-router-dom';
import './Header.scss';

// function AddActiveClass() {
//     let a = document.querySelectorAll('.header-button');
//     for (let i = 0; i < a.length; i++) {
//     }
// } попытка как-то добавлять активный класс

export default function Header() {
    return (
        <>
            <div className="header">
                <NavLink className="header-logo" to='/'>Логотип</NavLink>
                <div className="header-buttons">
                    <NavLink className="header-button" to='/'>Главная</NavLink>
                    <NavLink className="header-button" to='/profile'>Мой профиль</NavLink>
                    <NavLink className="header-button header-button-red" to='/booking-page'>Забронировать место</NavLink>
                </div>
            </div>
            <Outlet/>
        </>
    );
};