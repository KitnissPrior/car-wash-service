import { Outlet, useLocation } from 'react-router-dom';
import React from 'react';
import { HeaderOwner } from './headers/HeaderOwner';
import HeaderClient from "./headers/HeaderClient";
import { useAuthContext } from "../components/AuthContext";

export const PageHost: React.FC = React.memo(() => {
    const {userData} = useAuthContext();

    const location = useLocation();
    
    return (
        <>
            { location.pathname !== '/' && location.pathname !== '/sign-up'? 
                (localStorage.getItem('role') == 'owner' ? <HeaderOwner /> : localStorage.getItem('role') == 'client'? 
                <HeaderClient /> : null )
                : null}
            <Outlet />
        </>
    );
});