import React, { useState } from 'react';
import { useServicesQuery } from '../../api/serviceApi';
import { OrderFormProps, Service } from '../../types';
import {List} from 'antd';
import './ServiceSelection.scss'
import { Guid } from 'guid-typescript';

const ServiceSelectionStep: React.FC<OrderFormProps> = ({ data, onDataChange }) => {
    const query = useServicesQuery();
    const { data: services } = query;
    const filteredServices = services?.filter((service) => service.carwashId === data?.carwashSelection.carwashId);

    const [clickedItems, setClickedItems] = useState(new Set()); // Храним ID нажатых элементов

    const handleClick = (itemId : string | Guid | undefined) => {
        if (clickedItems.has(itemId)) {
            setClickedItems(prevState => {
                const newState = new Set(prevState);
                newState.delete(itemId);
                return newState;
            });
        } else {
            setClickedItems(prevState => new Set(prevState.add(itemId)));
            onDataChange({ services: clickedItems });
        }
    };

    return (
        <List 
            dataSource={filteredServices}
            renderItem={(item) => (
                <>
                <List.Item className="list-item"
                    key={item.name}
                    onClick={() => handleClick(item.serviceId)}
                    style={{
                        cursor: 'pointer',
                        backgroundColor: clickedItems.has(item.serviceId)? 'red' : 'initial',
                    }}
                    >
                    <List.Item.Meta title={item.name + ` (~${item.duration} мин.)`}/>
                    <List.Item.Meta title={item.price + " р."}/>
                </List.Item>
                </>
            )}
            />
    );
};

export default ServiceSelectionStep;
