import { Guid } from "guid-typescript";
import { OrderFormProps, Carwash } from "../../types";

export const CarwashesList: React.FC<OrderFormProps | any> = (props) => {

    const { data, carwashes, onDataChange, shouldGoNext } = props;

    const handleCarwashChange = (carwashId: string | Guid | undefined) => {
        onDataChange({ ...data, carwashId });
        shouldGoNext(true);
    };

    return (
        <div className='booking-carvash-adding'>
            {carwashes?.map((carwash: Carwash) => (
                <div className='erunda'>
                    <h3 className='erunda-title'>{carwash.name}</h3>
                        <p><b>Адрес: </b>{carwash.carwashStreet}</p>
                        <p><b>Контактный номер: </b>{carwash.contactInfo}</p>
                        <button onClick={() => handleCarwashChange(carwash.carwashId)}>Выбрать автомойку</button>
                </div>))
            }
        </div>
    );
}