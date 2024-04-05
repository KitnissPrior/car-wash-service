import { Outlet, NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
    return (
        <>
            <div className="header-wrapper">
                <div className="header">
                    <NavLink className="header-logo" to=''>Логотип</NavLink>
                    <div className="header-button">
                        <NavLink to='/owner'>Личный кабинет владельца</NavLink>
                    </div>
                </div>
            </div>

            <Outlet/>
        </>
    )
};