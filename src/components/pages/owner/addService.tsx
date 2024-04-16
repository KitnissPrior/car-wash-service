import React, {FC} from "react"
import { HeaderOwner } from "../headers/HeaderOwner"
import { AutoCenter, Dialog } from "antd-mobile"
import { Button, Form, Input} from "antd"
import { useNavigate } from "react-router-dom"
import { Carwash, Service } from "../../types"
import { ServicesList } from "./ServicesList"
import './styles/ServiceAdding.scss'
import { useServiceAddMutation, useServicesQuery } from "../../api/serviceApi"
import { QueryStatus } from "../page_not_found/QueryStatus"
import { useCarwashAddMutation } from "../../api/carwashApi"
import { useFormData, defaultFormData } from "./FormContext"

export const AddService:FC = () => {
    const navigate = useNavigate();

    const handleFormCancel = () => {
        navigate('/service-adding');
    }

    const handleContinue = () => {
        navigate('/service-adding');
    }

    return (
        <div className="carwash-adding">
            <div><HeaderOwner></HeaderOwner></div>
            <div className="carwash-adding-content2">
                <h1 className="form-title">Добавление услуги</h1>
                <Form>
                    <Form.Item label="Название автомойки*" name="name" >
                        <span className="input-label">Название услуги*</span>
                        <Input.TextArea className="input" placeholder="Название" required/>
                    </Form.Item>
                    <Form.Item label="Количество боксов для обслуживания*" name="boxAmount">
                        <span className="input-label">Стоимость*</span>
                        <Input type="number" className="input" min="1" placeholder="0" required/>
                    </Form.Item>
                    <Form.Item label="Количество боксов для обслуживания*" name="boxAmount">
                        <span className="input-label">Продолжительность услуги*</span>
                        <Input type="number" className="input" min="1" placeholder="0" required/>
                    </Form.Item>
                    <Form.Item>
                        <Button className="form-submit-button" onClick={handleContinue} htmlType="submit">Добавить</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button className="form-cancel-button" onClick={handleFormCancel}>Не добавлять</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
}