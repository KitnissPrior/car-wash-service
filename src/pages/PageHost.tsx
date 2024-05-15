import { Outlet } from 'react-router-dom';
import React from 'react';
import { HeaderOwner } from './headers/HeaderOwner';
import HeaderClient from "./headers/HeaderClient";

export const PageHost: React.FC = React.memo(() => {
    const role = 'client';
    return (
        <>
            {role === 'client' ? <HeaderClient /> : <HeaderOwner />}
            <Outlet />
        </>
    );
});