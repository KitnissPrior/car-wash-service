import './HomePage.scss';
import { useCarwashesQuery } from '../../../components/api/carwashApi';
import CardList from '../card-list/CardList';
import { useAuthContext } from '../../../components/AuthContext';
import { useEffect } from 'react';
import { useUserQuery, usePersonDataQuery } from '../../../components/api/userApi';

export default function OwnerHomePage() {
    const query = useCarwashesQuery()
    const { data: carwashes} = query
    
    const {userData, setUserData} = useAuthContext();
    const {data: user} = useUserQuery(localStorage.getItem('userId') || '');
    
    //useEffect(() => {}, [userData]);
    const {data: personData }= usePersonDataQuery(user?.userId as string);
    
    const newUserData = {
        userId: user?.userId,
        login: user?.login,
        roleId: user?.roleId,
        personId: user?.personId,
        firstName: personData?.firstName,
        lastName: personData?.lastName,
        fathersName: personData?.fathersName,
        email: personData?.email,
        phoneNumber: personData?.phoneNumber,
        role: localStorage.getItem('role')?.toString(),
    }
    
    setUserData(newUserData);

    return (
        <>
            <main className='header-owner-main'>
                <div className='cards'>
                    {/*<QueryStatus query={query}></QueryStatus>*/}
                    <CardList data={carwashes}/> 
                </div>
            </main>
        </>
    );
};
