//import carLogo from '/src/images/car_logo.png';
import { HeaderOwner } from '../headers/HeaderOwner';
import './styles/OwnerHomePage.scss';
import { useCarwashesQuery } from '../../components/api/carwashApi';
import CardList from './CardList';
import { QueryStatus } from '../ux/QueryStatus';

export default function OwnerHomePage() {
    const query = useCarwashesQuery()
    const { data: carwashes} = query

    return (
        <>
            <HeaderOwner></HeaderOwner>
            <main className='header-owner-main'>
                <div className='cards'>
                    <QueryStatus query={query}></QueryStatus>
                    <CardList data={carwashes}/>
                </div>
            </main>
        </>
    );
};
