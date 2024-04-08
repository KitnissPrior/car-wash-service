import React, {FC} from "react"
import { HeaderOwner } from "../headers/HeaderOwner"
import { AutoCenter, Dialog } from "antd-mobile"
import { Button, Form} from "antd"
import { useNavigate } from "react-router-dom"
import { Carwash } from "../../types"
import { ServicesList } from "./ServicesList"
import './styles/ServiceAdding.scss'
import { useServiceAddMutation, useServicesQuery } from "../../api/serviceApi"
import { QueryStatus } from "../page_not_found/QueryStatus"

export const ServiceAdding:FC = () => {
    const query = useServicesQuery()
    const { data: services} = query
    const navigate = useNavigate()

    const handleFormSubmit = async (data: Carwash) => {
        // console.log(data)
        // await save(data);
        // navigate('/owner');
        // Dialog.alert({content: 'Автомойка успешно добавлена', confirmText: 'Хорошо'});

    }

    const handleFormCancel = () => {
        navigate('/carwash-adding');
    }

    const handleServiceAdd = () => {
        
    }

    
    return (
        <div>
        <div><HeaderOwner></HeaderOwner></div>
        <div>
            <AutoCenter>
            <h1 style={{padding: '30px 50px', fontSize: '24px'}}>Услуги</h1>
                <Form onFinish={handleFormSubmit}>
                    <div>
                    <ServicesList data={services}/>
                    <QueryStatus query={query}></QueryStatus>
                    </div>
                    
                    <Form.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button onClick={handleServiceAdd}>Добавить услугу</Button>
                    </Form.Item>
                    <Form.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button className="form-submit-button" htmlType="submit">Добавить автомойку</Button>
                    </Form.Item>
                    <Form.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button className="form-cancel-button" onClick={handleFormCancel}>Назад</Button>
                    </Form.Item>
            </Form>
            </AutoCenter>
        </div>
    </div>
    )
    
}
