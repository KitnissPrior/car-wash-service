import { Outlet, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <>
            <div className="header-wrapper">
                <div className="header">
                    <NavLink to='/'>Логотип</NavLink>
                    <NavLink to=''>История заказов</NavLink>
                    <NavLink to=''>Мой профиль</NavLink>
                </div>
            </div>

            <Outlet/>
        </>
    )
};