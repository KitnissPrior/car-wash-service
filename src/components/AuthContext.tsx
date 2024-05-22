import React, { createContext, useContext, useEffect, useState } from 'react';
import { UserData } from './types';
import { ContextProviderProps } from './types';

export const defaultUserData: UserData = { 
    userId: '', 
    firstName: '', 
    lastName: '', 
    fathersName: '', 
    email: '', 
    phoneNumber: '', 
    role: '', 
    password: '', 
    roleId: '', 
    login: '', 
    personId: '' 
};

const AuthContext = createContext<{ userData: UserData; setUserData: React.Dispatch<React.SetStateAction<UserData>> }>({
    userData: defaultUserData,
    setUserData: () => {},
});

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: React.FC<ContextProviderProps> = ({ children }) => {
    const [userData, setUserData] = useState<UserData>(() => {
        const storedData = localStorage.getItem('userData');
        if (storedData) {
            return JSON.parse(storedData);
        }
        return defaultUserData;
    });

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
        setUserData(userData);
    }, [userData]);
       
    return <AuthContext.Provider value={{ userData, setUserData }}>{children}</AuthContext.Provider>;
};