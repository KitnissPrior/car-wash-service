import {FC} from "react"
import { HeaderOwner } from "../headers/HeaderOwner"
import { Dialog } from "antd-mobile"
import { Button, Form} from "antd"
import { useNavigate } from "react-router-dom"
import { ServicesList } from "./ServicesListInForm"
import './styles/ServiceAdding.scss'
import { useServicesQuery } from "../../components/api/serviceApi"
import { QueryStatus } from "../ux/QueryStatus"
import { useFormData, defaultFormData } from "./CarwashFormContext"

export const ServiceAdding:FC = () => {
    const navigate = useNavigate()

    const { formData: carwashData, setFormData } = useFormData();
    
    const query = useServicesQuery()
    const { data: services} = query
    const filteredServices = services?.filter(item => item.carwash_ID === carwashData.id);


    const handleFormSubmit = async () => {
        //это пригодится позже
        // if(filteredServices?.length === 0) {
        //     Dialog.alert({content: 'Вы не добавили ни одной услуги!', confirmText: 'Добавить услугу', 
        //         onConfirm: () => navigate('/service-adding')});
        //     return
        // }

        navigate('/owner');
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
                        <Button className="form-submit-button" htmlType="submit">Завершить</Button>
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
