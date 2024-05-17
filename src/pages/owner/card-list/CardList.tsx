import { Card } from 'antd';
import './CardList.scss'
import { Carwash } from '../../../components/types';
import { useNavigate } from 'react-router-dom';
import { useFormData, defaultFormData } from '../carwash-form/CarwashFormContext';
import { Link } from 'react-router-dom';

const CardList : React.FC<{ data: Carwash[] | undefined}> = ({data}) => {
    const navigate = useNavigate();
    const {setFormData} = useFormData();

    const handleCardEdit = (card: Carwash) => {
        setFormData(card);
        navigate(`/carwashes/carwash-about/:${card.carwashId}`);
    }

    const handleCardAdd = () => {
        setFormData(defaultFormData);
    }

    return (
        <div className="card-list">
            {data?.map((item, index) =>
                <Card onClick={() => handleCardEdit(item)} key={index} className='card'>
                    <p className='carwash-title'>Название автомойки: {item.name}</p>
                    <p className='carwash-info'><b>Адрес:</b> {item.carwashStreet}</p>
                    <p className='carwash-info'><b>Количество боксов обслуживания:</b> {item.boxAmount}</p>
                    <p className='carwash-info'><b>Контактные данные:</b> {item.contactInfo}</p>
                </Card>
                
            )}
            <div className="adding-button" onClick={handleCardAdd}>
                <Link className="adding-button-link" to='/carwashes/carwash-adding'>
                <img src="/src/images/plus.png" className='adding-button-image' alt="Кнопка" />
                Добавить автомойку
                </Link>
            </div>
        </div>
    );
}

export default CardList;