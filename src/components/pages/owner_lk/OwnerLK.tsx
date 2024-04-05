import carLogo from '/src/images/car_logo.png';
import { HeaderOwner } from '../../header/HeaderOwner';
import { Link } from 'react-router-dom';
import './OwnerLK.scss';
import {Button} from 'antd';
import { AutoCenter } from 'antd-mobile';

export default function OwnerLK() {
    
    return (
        <>
        <HeaderOwner></HeaderOwner>
        <main>
                <Button className='adding-button'>
                    <Link to='/carwash-adding'>Добавить автомойку</Link>
                </Button>
        </main>
        </>
    )
}
