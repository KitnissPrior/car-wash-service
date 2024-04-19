import { Outlet, NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
    return (
        <>
                <div className="header">
                    <NavLink className="header-logo" to=''>Логотип</NavLink>
                    <div className="header-buttons">
                        <NavLink className="header-button header-button-red" to='/'>Забронировать место</NavLink>
                        <NavLink className="header-button" to='/'>Мой профиль</NavLink>
                    </div>
                </div>

            <Outlet/>
        </>
    )
};