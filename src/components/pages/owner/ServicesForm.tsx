import React, {FC} from "react"
import { HeaderOwner } from "../headers/HeaderOwner"
import { AutoCenter, Dialog } from "antd-mobile"
import { Button, Form} from "antd"
import { useNavigate } from "react-router-dom"
import { Carwash, Service } from "../../types"
import { ServicesList } from "./ServicesListInForm"
import './styles/ServiceAdding.scss'
import { useServiceAddMutation, useServicesQuery } from "../../api/serviceApi"
import { QueryStatus } from "../ux/QueryStatus"
import { useCarwashAddMutation } from "../../api/carwashApi"
import { useFormData, defaultFormData } from "./CarwashFormContext"

export const ServiceAdding:FC = () => {
    const navigate = useNavigate()

    const { formData: carwashData, setFormData } = useFormData();
    const {mutateAsync: save} = useCarwashAddMutation()
    
    const query = useServicesQuery()
    const { data: services} = query
    const filteredServices = services?.filter(item => item.carwash_ID === carwashData.id);


    const handleFormSubmit = async () => {
        //этот пока не нужно, т.к без сгенерированного id автомойки услуга к новой автомойке не добавится
        // if(filteredServices?.length === 0) {
        //     Dialog.alert({content: 'Вы не добавили ни одной услуги!', confirmText: 'Добавить услугу', 
        //         onConfirm: () => navigate('/service-adding')});
        //     return
        // }
        console.log(carwashData)
        await save(carwashData);

        navigate('/owner');
        Dialog.alert({content: 'Автомойка успешно сохранена', confirmText: 'Хорошо'});
        setFormData(() => (defaultFormData));

    }

    const handleGoBack = () => {
        navigate('/carwash-adding');
    }

    const handleServiceAdd = () => {
        navigate('../service-adding')
    }

    return (
        <div>
        <div><HeaderOwner></HeaderOwner></div>
        <div className="services-adding-main">
        <div className="services-adding">
            <h1 className="form-title">Услуги</h1>
                <Form onFinish={handleFormSubmit}>
                    <Form.Item>
                        <Button onClick={handleServiceAdd} className="form-cancel-button-add-service">Добавить услугу</Button>
                    </Form.Item>
                    <div>
                    <ServicesList data={filteredServices}/>
                    <QueryStatus query={query}></QueryStatus>
                    </div>
                    <Form.Item>
                        <Button className="form-submit-button" htmlType="submit">Сохранить</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button className="form-cancel-button" onClick={handleGoBack}>Назад</Button>
                    </Form.Item>
            </Form>
        </div>
        </div>
    </div>
    )
    
}
