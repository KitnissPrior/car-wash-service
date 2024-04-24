import { List } from "antd";
import { Service } from "../../components/types";
import { FC } from "react";
import { NoData } from "../ux/NoData";

export const ServicesInfo : FC<{ data: Service[] | undefined}> = ({data}) => {
    return (
        <div>
        {data?.length? 
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
            /> : <p className="no-services">
                <NoData message="Услуг пока нет!" />
                </p>
        }
        </div>
    );
}