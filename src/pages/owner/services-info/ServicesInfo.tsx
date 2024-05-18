import { List, Button } from "antd";
import { Service } from "../../../components/types";
import { FC, useState } from "react";
import { NoData } from "../../ux/NoData";
import { useNavigate } from "react-router-dom";
import { Guid } from "guid-typescript";
import { useServiceDeleteMutation, useServiceQuery } from "../../../components/api/serviceApi";
import { ConfirmationPopup } from "../../ux/ConfirmationPopup";

export const ServicesInfo : FC<{ data: Service[] | undefined}> = ({data}) => {
    const navigate = useNavigate()
    const {mutateAsync: deleteService} = useServiceDeleteMutation()
    const [confirmationVisible, setConfirmationVisible] = useState(false);

    const handleServiceEdit = (service : Service) => {
        navigate(`/carwashes/carwash-about/:${service?.carwashId}/service-editing/:${service?.serviceId}`)
    }

    const handleServiceDelete = async (service : Service) => {
        await deleteService(service);
        setConfirmationVisible(false);
    }

    const showConfirmationVisible = () => {
        setConfirmationVisible(true);
    }

    const handleDeleteCancel = () => {
        setConfirmationVisible(false);
    }

    return (
        <div>
        {data?.length? 
        <List 
            dataSource={data}
            renderItem={(item) => (
                <>
                <List.Item
                    key={item.name}>
                    <List.Item.Meta title={item.name} />
                    <List.Item.Meta title={item.price + " р."}/>
                    <List.Item.Meta title={item.duration + " мин."}/>
                    <List.Item.Meta
                        title={
                            <Button onClick={ () => handleServiceEdit(item)}>Редактировать</Button>
                    }/>
                    <List.Item.Meta 
                        title={
                        <Button onClick={showConfirmationVisible}>Удалить</Button>
                    }/>
                </List.Item>
                <ConfirmationPopup 
                    title="Вы уверены, что хотите удалить эту услугу?"
                    handleOk={() => handleServiceDelete(item)}
                    handleCancel={handleDeleteCancel}
                    visible={confirmationVisible}
                    okText="Да, удалить"
                    cancelText="Отмена"/>
                </>
            )}
            /> : <p className="no-services">
                <NoData message="Услуг пока нет!" />
                </p>
        }
        </div>
    );
}