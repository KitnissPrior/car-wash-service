import {FC} from "react";
import { Service } from "../../components/types";
import { List } from "antd";
import './styles/ServicesList.scss'

export const ServicesList : FC<{ data: Service[] | undefined}> = ({data}) => {

    return (
        <div>
            <List 
            dataSource={data}
            renderItem={(item) => (
                <List.Item
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