import { Card } from 'antd';
import './CardList.scss'

interface CardItemProps {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

const CardList : React.FC<{ data: CardItemProps[] }> = ({data}) => {
    const filteredData = data.filter(item => item.userId === 2);

    return (
        <div className="card-list">
            {filteredData.map((item, index) =>
                <Card key={index} style={{ width: 300 }}>
                    <p>User ID: {item.userId}</p>
                    <p>Task ID: {item.id}</p>
                    <p>Task Title: {item.title}</p>
                    <p>Is it done? {item.completed ? "Yes" : "No"}</p>
                </Card>
            )}
        </div>
    );
}

export default CardList;