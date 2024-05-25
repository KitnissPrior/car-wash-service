import './HomePage.scss';
import { useCarwashesQuery } from '../../../components/api/carwashApi';
import CardList from '../card-list/CardList';
import { useAuthContext } from '../../../components/AuthContext';
import { useEffect } from 'react';

export default function OwnerHomePage() {
    const query = useCarwashesQuery()
    const { data: carwashes} = query
    const { userData } = useAuthContext();

    useEffect(() => {}, [userData]);

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
