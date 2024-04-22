import { Outlet, NavLink } from 'react-router-dom';
import './HeaderOwner.scss';

export function HeaderOwner() {
    return (
        <>
            <div className="header">
                <NavLink className="header-logo" to='/'>Логотип</NavLink>
                <NavLink className="header-title" to='/owner'>Мои автомойки</NavLink>
                <NavLink to='' className="header-button">Мой профиль</NavLink>
            </div>
            <Outlet/>
        </>
    );
}