import { List } from "antd";
import { Service } from "../../types";
import { FC } from "react";
import { NoData } from "../ux/NoData";

export const ServicesInfo : FC<{ data: Service[] | undefined}> = ({data}) => {
    console.log(data)
    return (
        <div className="">
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
            /> : <NoData message="Услуг пока нет!" />
        }
        </div>
    );
}