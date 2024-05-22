import './HomePage.scss';
import { useCarwashesQuery } from '../../../components/api/carwashApi';
import CardList from '../card-list/CardList';
import { QueryStatus } from '../../ux/QueryStatus';

export default function OwnerHomePage() {
    const query = useCarwashesQuery()
    const { data: carwashes} = query

    return (
        <>
            <main className='header-owner-main'>
                <div className='cards'>
                    {<QueryStatus query={query}></QueryStatus>}
                    <CardList data={carwashes}/> 
                </div>
            </main>
        </>
    );
};
