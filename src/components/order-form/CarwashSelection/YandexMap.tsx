import { YMaps, Map, Placemark} from '@pbe/react-yandex-maps';
import { Carwash, OrderFormProps } from '../../types';
import React from 'react';


export const MapApp: React.FC<OrderFormProps | any> = ({carwashes}) => {

    return (
        <YMaps
            query={{
                apikey: "4e901b2a-d2ff-4af7-bd5b-12dd596a2002",
                ns: "use-load-option",
                load: "Map,Placemark,control.ZoomControl,control.FullscreenControl,geoObject.addon.balloon,",
            }}
        >
            <Map className="map" defaultState={{ center: [56.83, 60.60], zoom: 13, controls: ["zoomControl", "fullscreenControl"] }}>
                {carwashes?.map((carwash : Carwash) =>
                    <Placemark
                        defaultGeometry={[56.83, 60.60]}
                        properties={{
                            balloonContentHeader:
                                `<h4>${carwash.name}</h4>`,
                            balloonContentBody:
                                `${carwash.carwashStreet}`
                        }}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: '../src/images/mapsIcon.png',
                            iconImageSize: [27, 36],
                        }}
                    />)
                }
            </Map>
        </YMaps>
    );
};