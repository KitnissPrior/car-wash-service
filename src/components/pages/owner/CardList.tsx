import { Card, Button } from 'antd';
import './styles/CardList.scss'
import { Carwash } from '../../types';
import { useNavigate } from 'react-router-dom';
import { useFormData } from './FormContext';

// interface CardItemProps {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

const CardList : React.FC<{ data: Carwash[] | undefined}> = ({data}) => {
    const navigate = useNavigate();
    const {formData: carwashData, setFormData} = useFormData();

    const handleCardEdit = (card: Carwash) => {
        setFormData({...carwashData, ...card});
        navigate(`/carwash-about/`);
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
        </div>
    );
}

export default CardList;