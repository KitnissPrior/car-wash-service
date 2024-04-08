import carLogo from '/src/images/car_logo.png';
import { HeaderOwner } from '../../header/HeaderOwner';
import { Link } from 'react-router-dom';
import './OwnerHomePage.scss';
import {Button} from 'antd';
import { AutoCenter } from 'antd-mobile';
import { useCarwashesQuery } from '../../api/carwashApi';
import CardList from '../../cards/CardList';
import { QueryStatus } from '../page_not_found/QueryStatus';

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
            <div className="adding-button">
                <Link className="adding-button-link" to='/carwash-adding'>
                <img src="/src/images/plus.png" className='adding-button-image' alt="" />
                Добавить автомойку
                </Link>
            </div>
        </main>
        </>
    )
}
