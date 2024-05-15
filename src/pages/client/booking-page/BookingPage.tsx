import { YMaps, Map, Placemark, ZoomControl } from '@pbe/react-yandex-maps';
import './BookingPage.scss';
import OrderForm from "../../../components/order-form/OrderForm";
import DateTimeSelectionStep from "../../../components/order-form/DateTimeSelectionStep";
import ServiceSelectionStep from "../../../components/order-form/ServiceSelectionStep";
import PersonalInfoStep from "../../../components/order-form/PersonalInfoStep";

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

const stepData = [
    {
        title: "Выберите услугу",
        id: "serviceSelection",
        content: ServiceSelectionStep, // Предполагается, что это компонент для выбора услуги
    },
    {
        title: "Выберите дату и время",
        id: "dateTimeSelection",
        content: DateTimeSelectionStep, // Предполагается, что это компонент для выбора даты и времени
    },
    {
        title: "Введите личную информацию",
        id: "personalInfo",
        content: PersonalInfoStep, // Предполагается, что это компонент для ввода личной информации
    },
];

const handleSubmit = (data: any) => {
    console.log("Форма отправлена:", data);
};

// Основное все закомментировано для работы над OrderForm
export default function BookingPage() {
    return (
        <>
            <OrderForm stepData={stepData} onSubmit={handleSubmit} />
            {/*<div className="booking-container">*/}
            {/*    <h2 className="booking-title">Выберете автомойку</h2>*/}
            {/*    <div className='choose-container'>*/}
            {/*        <MapApp />*/}
            {/*        <div className='booking-carvash-adding'>*/}
            {/*            /!* В будущем зафункционировать автоподбор мест с БД *!/*/}
            {/*            <div className='erunda'>*/}
            {/*                <h3 className='erunda-title'>Автомойка 1</h3>*/}
            {/*                <p><b>Адрес: </b>ул. Первомайская, 32</p>*/}
            {/*                <p><b>График работы: </b>8:00 - 22:00</p>*/}
            {/*                <p><b>Контакный номер: </b>+7 (777) 777-77-77</p>*/}
            {/*            </div>*/}
            {/*            <div className='erunda'>*/}
            {/*                <h3 className='erunda-title'>Автомойка 1</h3>*/}
            {/*                <p><b>Адрес: </b>ул. Первомайская, 32</p>*/}
            {/*                <p><b>График работы: </b>8:00 - 22:00</p>*/}
            {/*                <p><b>Контакный номер: </b>+7 (777) 777-77-77</p>*/}
            {/*            </div>*/}
            {/*            <div className='erunda'>*/}
            {/*                <h3 className='erunda-title'>Автомойка 1</h3>*/}
            {/*                <p><b>Адрес: </b>ул. Первомайская, 32</p>*/}
            {/*                <p><b>График работы: </b>8:00 - 22:00</p>*/}
            {/*                <p><b>Контакный номер: </b>+7 (777) 777-77-77</p>*/}
            {/*            </div>*/}
            {/*            <div className='erunda'>*/}
            {/*                <h3 className='erunda-title'>Автомойка 1</h3>*/}
            {/*                <p><b>Адрес: </b>ул. Первомайская, 32</p>*/}
            {/*                <p><b>График работы: </b>8:00 - 22:00</p>*/}
            {/*                <p><b>Контакный номер: </b>+7 (777) 777-77-77</p>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};
