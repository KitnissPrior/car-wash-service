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
        <main>
            <QueryStatus query={query}></QueryStatus>
            <CardList data={carwashes}/>
            <Button className="adding-button">
                <Link to='/carwash-adding'>Добавить автомойку</Link>
            </Button>
        </main>
        </>
    )
}
