import {FC} from "react"
import { HeaderOwner } from "../headers/HeaderOwner"
import { Button, Form, Input} from "antd"
import { useNavigate } from "react-router-dom"
import { Carwash, Service } from "../../types"
import './styles/ServiceAdding.scss'
import { useServiceAddMutation, useServicesQuery } from "../../api/serviceApi"
import { QueryStatus } from "../page_not_found/QueryStatus"
import { useFormData, defaultFormData } from "./FormContext"

export const ServiceAddingForm: FC = () => {
    const navigate = useNavigate();

    const handleFormCancel = () => {
        navigate(-1);
    }

    const handleContinue = () => {
        navigate(-1);
    }

    return (
        <div className="carwash-adding">
            <div><HeaderOwner></HeaderOwner></div>
            <div className="carwash-adding-content2">
                <h1 className="form-title">Добавление услуги</h1>
                <Form>
                    <Form.Item label="Название автомойки*" name="name" >
                        <div>
                            <span className="input-label">Название услуги*</span>
                            <Input.TextArea className="input" placeholder="Название" required/>
                        </div>
                    </Form.Item>
                    <Form.Item label="Количество боксов для обслуживания*" name="boxAmount">
                        <div>
                            <span className="input-label">Продолжительность услуги*</span>
                            <Input type="number" className="input" min="1" placeholder="0" required/>
                        </div>
                    </Form.Item>
                    <Form.Item label="Количество боксов для обслуживания*" name="boxAmount">
                        <div>
                            <span className="input-label">Продолжительность услуги*</span>
                            <Input type="number" className="input" min="1" placeholder="0" required/>
                        </div>
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