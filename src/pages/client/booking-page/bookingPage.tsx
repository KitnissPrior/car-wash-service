import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import Header from "../../headers/Header";
import './bookingPage.scss';
import { NavLink } from 'react-router-dom';

export default function BookingPage() {
    const App = () => (
    <YMaps>
        <Map className="map" defaultState={{
            center: [56.84, 60.60],
            zoom: 12,
            controls: ["zoomControl", "fullscreenControl"],
            }}
            modules={["control.ZoomControl", "control.FullscreenControl"]}>
        <Placemark defaultGeometry={[56.84, 60.60]} />
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
                </div>
            </div>
        </div>
        </>
    );

}
