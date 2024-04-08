import { Card } from 'antd';
import './styles/CardList.scss'
import { Carwash } from '../../types';

// interface CardItemProps {
//     userId: number;
//     id: number;
//     title: string;
//     completed: boolean;
// }

const CardList : React.FC<{ data: Carwash[] | undefined}> = ({data}) => {
    //const filteredData = data.filter(item => item.id === 2);

    return (
        <div className="card-list">
            {data?.map((item, index) =>
                <Card key={index} className='card'>
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