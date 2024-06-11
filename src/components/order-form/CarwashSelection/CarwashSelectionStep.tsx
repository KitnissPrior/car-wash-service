import { OrderFormProps } from '../../types';
import { useCarwashesQuery } from '../../api/carwashApi';
import React, {useState} from 'react';
import { MapApp } from './YandexMap';
import { CarwashesList } from './CarwashesList';


const CarwashStep : React.FC<OrderFormProps> = (props) => 
{
    const [mapVisible, setMapVisible] = useState(false);

    const query = useCarwashesQuery()
    const { data: carwashes} = query

    const openMap = () => {
        setMapVisible(true);
    }

    const openList = () => {
        setMapVisible(false);
    }

    return (
            <div className="booking-container">
                <h2 className="booking-title">Выберите автомойку</h2>
                <button onClick={openMap}>Карта</button>
                <button onClick={openList}>Список</button>
                <div className='choose-container'>
                    {mapVisible ? <MapApp carwashes={carwashes}/> : <CarwashesList carwashes={carwashes} {...props}/>}
                 </div>
            </div>
    );
};

export default CarwashStep;
