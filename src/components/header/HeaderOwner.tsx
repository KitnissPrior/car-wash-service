import { Outlet, NavLink } from 'react-router-dom';
import './HeaderOwner.scss';

export function HeaderOwner() {
    return (
        <>
            <div className="header-wrapper">
                <div className="header">
                    <NavLink className="header-logo" to='/'>На главную</NavLink>
                    <NavLink className="header-title" to='/owner'>Мои автомойки</NavLink>
                    <div >
                        <NavLink to='' className="header-button">Мой профиль</NavLink>
                    </div>
                </div>
            </div>

            <Outlet/>
        </>
    )
};