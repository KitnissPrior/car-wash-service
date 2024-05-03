import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import Header from "../../headers/Header";
import './bookingPage.scss';
import { NavLink } from 'react-router-dom';
import { List } from 'antd';
import CardList from '../../owner/CardList';
import { useCarwashesQuery } from '../../../components/api/carwashApi';
import { QueryStatus } from '../../ux/QueryStatus';

export default function BookingPage() {
    const query = useCarwashesQuery()
    const { data: carwashes} = query

    const App = () => (
        <YMaps
            query={{
            ns: "use-load-option",
            load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon",
            }}
        >
            <Map className="map"
            defaultState={{
                center: [56.83, 60.60],
                zoom: 13,
                controls: ["zoomControl", "fullscreenControl"],
            }}
            >
            <Placemark
                defaultGeometry={[56.83, 60.60]}
                properties={{
                    balloonContentBody:
                    "Автомойка 1",
                }}
            />
            <Placemark
                defaultGeometry={[56.82, 60.604]}
                properties={{
                    balloonContentBody:
                    "Автомойка 2",
                }}
            />
            </Map>
        </YMaps>
    );

    return (
        <>
            <div className="header">
                <NavLink className="header-logo" to='/'>Логотип</NavLink>
                <div className="header-buttons">
                    <NavLink className="header-button" to='/'>На главную</NavLink>
                    <NavLink className="header-button" to='/profile'>Мой профиль</NavLink>
                </div>
            </div>
        <div className="booking-container">
            <h2 className="booking-title">Выберете автомойку</h2>
            <div className='choose-container'>
                <App />
                <div className='booking-carvash-adding'>
                    {/* тут будет список автомоек потом */}
                        <div className='erunda'>
                            <h3 className='erunda-title'>Автомойка 1</h3>
                            <p><b>Адрес: </b>ул. Первомайская, 32</p>
                            <p><b>График работы: </b>8:00 - 22:00</p>
                            <p><b>Контакный номер: </b>+7 (777) 777-77-77</p>
                        </div>
                        <div className='erunda'>
                            <h3 className='erunda-title'>Автомойка 1</h3>
                            <p><b>Адрес: </b>ул. Первомайская, 32</p>
                            <p><b>График работы: </b>8:00 - 22:00</p>
                            <p><b>Контакный номер: </b>+7 (777) 777-77-77</p>
                        </div>
                        <div className='erunda'>
                            <h3 className='erunda-title'>Автомойка 1</h3>
                            <p><b>Адрес: </b>ул. Первомайская, 32</p>
                            <p><b>График работы: </b>8:00 - 22:00</p>
                            <p><b>Контакный номер: </b>+7 (777) 777-77-77</p>
                        </div>
                        <div className='erunda'>
                            <h3 className='erunda-title'>Автомойка 1</h3>
                            <p><b>Адрес: </b>ул. Первомайская, 32</p>
                            <p><b>График работы: </b>8:00 - 22:00</p>
                            <p><b>Контакный номер: </b>+7 (777) 777-77-77</p>
                        </div>
                </div>
            </div>
        </div>
        </>
    );

}
