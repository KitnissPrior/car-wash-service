import { Card } from 'antd';
import './CardList.scss'
import { Carwash } from '../../../components/types';
import { useNavigate } from 'react-router-dom';
import { useFormData } from '../carwash-form/CarwashFormContext';
import { CarwashAddButton } from './CarwashAddButton';
import { NoCarwashes } from './NoCarwashes';

const CardList : React.FC<{ data: Carwash[] | undefined}> = ({data}) => {
    const navigate = useNavigate();
    const {setFormData} = useFormData();

    const handleCardEdit = (card: Carwash) => {
        setFormData(card);
        navigate(`/carwashes/carwash-about/:${card.carwashId}`);
    }

    return ( 
        data?.length ? (
            <div className="card-list">
                { data?.map((item, index) =>
                    <Card onClick={() => handleCardEdit(item)} key={index} className='card'>
                        <p className='carwash-title'>Название автомойки: {item.name}</p>
                        <p className='carwash-info'><b>Адрес:</b> {item.carwashStreet}</p>
                        <p className='carwash-info'><b>Количество боксов обслуживания:</b> {item.boxAmount}</p>
                        <p className='carwash-info'><b>Контактные данные:</b> {item.contactInfo}</p>
                    </Card>
                )}
                    <CarwashAddButton/>
            </div>)
        : 
            (<>
                <NoCarwashes/>
                <div className="card-list">
                    <CarwashAddButton/>
                </div>
                
            </>)
    );
}

export default CardList;