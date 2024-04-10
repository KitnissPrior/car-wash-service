import { FC } from "react";
import { Carwash } from "../../types";
import { defaultFormData, useFormData } from "./FormContext";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useCarwashDeleteMutation } from "../../api/carwashApi";
import { AutoCenter, Dialog } from "antd-mobile";

export const CarwashInfo: FC = () => {
   const navigate = useNavigate();
   const {formData: carwash, setFormData} = useFormData();
   const {mutateAsync: deleteCarwash} = useCarwashDeleteMutation()

   const handleEditClick = () => {
        navigate(`/carwash-adding/`);
   }

   const handleDeleteClick = async (item: Carwash) => {
    console.log(item)
    await deleteCarwash(item);

    navigate('/owner');
    Dialog.alert({content: 'Автомойка успешно удалена', confirmText: 'Хорошо'});
    setFormData(() => (defaultFormData));

}
    return (
        <>
        <AutoCenter>
            <h1>Мои автомойки|{carwash?.name}</h1>
            <div>Основная информация</div>
            <p>Адрес: {carwash?.carwashStreet}</p>
            <p>Контактный номер: {carwash?.contactInfo}</p>
            <Button onClick={handleEditClick}>Редактировать информацию</Button>
            <Button onClick={() => handleDeleteClick(carwash)}>Удалить автомойку</Button>
        </AutoCenter>
        
        </>
    );
}