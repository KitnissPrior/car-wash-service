import { Card } from 'antd';
import './CardList.scss'
import { Carwash } from '../types';

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
                <Card key={index} style={{ width: 300 }}>
                    <p>Название автомойки: {item.name}</p>
                    <p>Адрес: {item.carwashStreet}</p>
                    <p>Количество боксов обслуживания: {item.boxAmount}</p>
                    <p>Контактные данные: {item.contactInfo}</p>
                </Card>
            )}
        </div>
    );
}

export default CardList;