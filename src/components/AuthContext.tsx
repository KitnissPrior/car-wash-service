import React, { createContext, useContext, useState } from 'react';
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
    const [userData, setUserData] = useState<UserData>(defaultUserData);
       
    return <AuthContext.Provider value={{ userData, setUserData }}>{children}</AuthContext.Provider>;
};



//     const [userData, setUserData] = useState< User | undefined >(undefined);

//     // Предположим, что здесь происходит аутентификация и получение данных пользователя
//     // Например, после успешной аутентификации, данные пользователя устанавливаются
//     // useEffect(() => {
//     //     const fetchedUser = fetchUserDataFromServer(); // Замените на вашу логику получения данных
//     //     setUser(fetchedUser);
//     // }, []);

//     return (
//         <UserContext.Provider value={{ userData, setUserData}}>
//             {children}
//         </UserContext.Provider>
//     );
// };
