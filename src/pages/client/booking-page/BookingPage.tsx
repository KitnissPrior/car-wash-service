import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import { NavLink } from 'react-router-dom';
import './BookingPage.scss';

const MapApp = () => {
    return (
        <YMaps
            query={{
                apikey: "4e901b2a-d2ff-4af7-bd5b-12dd596a2002",
                ns: "use-load-option",
                load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon,",
            }}
        >
            <Map className="map" defaultState={{ center: [56.83, 60.60], zoom: 13, controls: ["zoomControl", "fullscreenControl"] }}>
                {/* Placemarks шаблонные, в будущем зафункционировать автоматический подбор мест с БД */}
                <Placemark
                    defaultGeometry={[56.83, 60.60]}
                    properties={{
                        balloonContentHeader:
                            "<h4>Автомойка 1</h4>",
                        balloonContentBody:
                            "адрес автомойки"
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: '../src/images/mapsIcon.png',
                        iconImageSize: [27, 36],
                    }}
                />
                <Placemark
                    defaultGeometry={[56.84, 60.62]}
                    properties={{
                        balloonContentHeader:
                            "<h4>Автомойка 2</h4>",
                        balloonContentBody:
                            "адрес автомойки"
                    }}
                    options={{
                        iconLayout: 'default#image',
                        iconImageHref: '../src/images/mapsIcon.png',
                        iconImageSize: [27, 36],
                    }}
                />
                <ZoomControl
                    options={{
                        // Здесь параметры какие-то нужны?
                    }}
                />
            </Map>
        </YMaps>
    );
};

export default function BookingPage() {
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
                    <MapApp />
                    <div className='booking-carvash-adding'>
                        {/* В будущем зафункционировать автоподбор мест с БД */}
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
};