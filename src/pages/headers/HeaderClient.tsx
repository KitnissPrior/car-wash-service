import { NavLink } from 'react-router-dom';
import './Header.scss';

// function AddActiveClass() {
//     let a = document.querySelectorAll('.header-button');
//     for (let i = 0; i < a.length; i++) {
//     }
// } попытка как-то добавлять активный класс

export default function HeaderClient() {
    return (
        <>
            <div className="header">
                <NavLink className="header-logo" to='/home'>Логотип</NavLink>
                <div className="header-buttons">
                    <NavLink className="header-button" to='/home'>Главная</NavLink>
                    <NavLink className="header-button" to='/home/profile'>Мой профиль</NavLink>
                    <NavLink className="header-button header-button-red" to='/home/booking-page'>Забронировать место</NavLink>
                </div>
            </div>
        </>
    );
};