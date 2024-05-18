import { FC, useState } from "react";
import { Carwash } from "../../../components/types";
import { Button } from "antd";
import { useNavigate, useParams} from "react-router-dom";
import { useCarwashDeleteMutation, useCarwashQuery} from "../../../components/api/carwashApi";
import { useServicesQuery } from "../../../components/api/serviceApi";
import { ConfirmationPopup } from "../../ux/ConfirmationPopup";
import { ServicesInfo } from "../services-info/ServicesInfo";
import './CarwashInfo.scss'

export const CarwashInfo: FC = () => {
    const [confirmationVisible, setConfirmationVisible] = useState(false);

    const navigate = useNavigate();
    const { id } = useParams<{ id?: string }>();
    
    const {data: carwash} = useCarwashQuery(id?.substring(1) || '');

    const {mutateAsync: deleteCarwash} = useCarwashDeleteMutation()
    const services = useServicesQuery().data;

    const handleEditClick = () => {
        navigate(`/carwashes/carwash-adding/`);
    }

    const handleAddServiceClick = () => {
        navigate(`/carwashes/carwash-about/:${carwash?.carwashId}/service-adding`);
    }
   
    const handleDeleteClick = async (item: Carwash) => {
        setConfirmationVisible(false);
        
        await deleteCarwash(item);
        navigate('/carwashes');
    }
    
    const handleContinue = () => {
        navigate('/carwashes');
    }

    const handleDeleteCancel = () => {
        setConfirmationVisible(false);
        navigate(`/carwashes/carwash-about/:${carwash?.carwashId}`)
    }

    const showConfirmationPopup = () => {
        setConfirmationVisible(true);
    }
    return (
        <div className="carwash-adding-info">
        <h1 className="carwash-info-title">{carwash?.name}</h1>
        <div className="carwash-info-buttons">
            <Button className="carwash-info-button" onClick={handleContinue}>Вернуться к автомойкам</Button>
            <Button className="carwash-info-button">Календарь</Button>
            <Button className="carwash-info-button carwash-info-button-active">Об автомойке</Button>
            <Button className="carwash-info-button">Боксы автомойки</Button>
        </div>
            <div className="carwash-item-info">
                <h2 className="carwash-item-info-title">Основная информация</h2>
                <p><b>Адрес: </b>{carwash?.carwashStreet}</p>
                <p><b>График работы: </b></p>
                <p><b>Контактный номер: </b>{carwash?.contactInfo}</p>
                <Button className="carwash-info-edit-button" onClick={handleEditClick}>Редактировать информацию</Button>
                <Button className="carwash-info-delete-button" onClick={showConfirmationPopup}>Удалить автомойку</Button>
                <ConfirmationPopup 
                    title="Вы уверены, что хотите удалить автомойку?"
                    handleOk={() => handleDeleteClick(carwash!)}
                    handleCancel={() => handleDeleteCancel()}
                    visible={confirmationVisible}
                    okText="Да, удалить"
                    cancelText="Отмена"/>
                <h2 className="carwash-item-info-title">Услуги автомойки</h2>
                <ServicesInfo data={services?.filter(item => item.carwashId === carwash?.carwashId)}/>
                <Button className="carwash-info-edit-button" onClick={handleAddServiceClick}>Добавить услугу</Button>
            </div>
        </div>
    );
}