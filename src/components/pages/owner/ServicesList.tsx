import React, {FC} from "react";
import { Service } from "../../types";
import { List } from "antd";
import './styles/ServicesList.scss'

export const ServicesList : FC<{ data: Service[] | undefined}> = ({data}) => {

    return (
        <div className="">
        <List 
            dataSource={data}
            renderItem={(item) => (
                <List.Item className="services-list-item"
                    key={item.id}>
                    <List.Item.Meta title={item.name} />
                    <List.Item.Meta title={item.price + " р."}/>
                    <List.Item.Meta title={item.time + " мин."}/>
                </List.Item>
            )}
            />
        </div>
    );
}