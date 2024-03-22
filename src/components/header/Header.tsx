import { Outlet, NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
    return (
        <>
            <div className="header-wrapper">
                <div className="header">
                    <NavLink className="header-logo" to='/'>Логотип</NavLink>
                    <div className="header-button">
                        <NavLink to=''>История заказов</NavLink>
                        <NavLink to=''>Мой профиль</NavLink>
                    </div>
                </div>
            </div>

            <Outlet/>
        </>
    )
};