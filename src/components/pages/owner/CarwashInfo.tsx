import { FC, useState } from "react";
import { Carwash } from "../../types";
import { defaultFormData, useFormData } from "./FormContext";
import { Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { useCarwashDeleteMutation } from "../../api/carwashApi";
import { Dialog } from "antd-mobile";
import { ConfirmationPopup } from "./ConfirmationPopup";
import './styles/CarwashInfo.scss'

export const CarwashInfo: FC = () => {
    const [confirmationVisible, setConfirmationVisible] = useState(false);

    const navigate = useNavigate();
    const {formData: carwash, setFormData} = useFormData();
    const {mutateAsync: deleteCarwash} = useCarwashDeleteMutation()

    const handleEditClick = () => {
        navigate(`/carwash-adding/`);
    }

    const handleAddServiceClick = () => {
        navigate('/service-adding');
    }
   
    const handleDeleteClick = async (item: Carwash) => {
        setConfirmationVisible(false);
        
        await deleteCarwash(item);
        navigate('/owner');

        Dialog.alert({content: 'Автомойка успешно удалена', confirmText: 'Хорошо'});
        setFormData(() => (defaultFormData));
        
    }
    
    const handleContinue = () => {
        navigate('/owner');
    }

    const handleDeleteCancel = () => {
        setConfirmationVisible(false);
        navigate(`/carwash-about/:${carwash.id}`)
    }

    const showConfirmationPopup = () => {
        setConfirmationVisible(true);
        console.log(confirmationVisible);
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
                    handleOk={() => handleDeleteClick(carwash)}
                    handleCancel={() => handleDeleteCancel()}
                    visible={confirmationVisible}
                    okText="Да, удалить"
                    cancelText="Отмена"/>
                <h2 className="carwash-item-info-title">Услуги автомойки</h2>
                <Button className="carwash-info-edit-button" onClick={handleAddServiceClick}>Добавить услугу</Button>
            </div>
        </div>
    );
}