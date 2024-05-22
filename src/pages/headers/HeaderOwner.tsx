import { NavLink } from 'react-router-dom';
import './Header.scss';

export function HeaderOwner() {
    return (
        <>
            <div className="header">
                <NavLink className="header-logo" to='/carwashes'>Логотип</NavLink>
                <NavLink className="header-title" to='/carwashes'>Мои автомойки</NavLink>
                <NavLink className="header-button" to='/carwashes/profile'>Мой профиль</NavLink>
            </div>
        </>
    );
}