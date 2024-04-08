import React, { useState } from "react"
import { FC} from "react"
import {Form, Button, Input, InputNumber} from "antd"
import './CarwashAdding.scss'
import { HeaderOwner } from "../../header/HeaderOwner"
import { AutoCenter } from "antd-mobile"
import { Link, useNavigate } from "react-router-dom"
import { useCarwashAddMutation } from "../../api/carwashApi"
import { Dialog } from "antd-mobile"
import { Carwash } from "../../types"

export const CarwashAdding: FC = () => {

    const {mutateAsync: save} = useCarwashAddMutation()
    const navigate = useNavigate()

    const handleFormSubmit = async (data: Carwash) => {
        console.log(data)
        await save(data);
        navigate('/owner');
        Dialog.alert({content: 'Автомойка успешно добавлена', confirmText: 'Хорошо'});

    }

    const handleFormCancel = () => {
        navigate('/owner');
    }

    return ( 
        <div className="carwash-adding">
            <div><HeaderOwner></HeaderOwner></div>
            <div className="carwash-adding-content2">
                <AutoCenter>
                <h1 style={{padding: '30px 50px', fontSize: '24px'}}>Добавление автомойки</h1>
                    <Form onFinish={handleFormSubmit}>
                    <Form.Item label="Название автомойки*" name="name">
                        <span className="input-label">Название автомойки*</span>
                        <Input className="input" placeholder="Название" required/>
                    </Form.Item>
                    <Form.Item label="Адрес*" name="carwashStreet" >
                        <span className="input-label">Адрес*</span>
                        <Input.TextArea className="input" placeholder="Адрес" required/>
                    </Form.Item>
                    <Form.Item label="Количество боксов для обслуживания*" name="boxAmount">
                        <span className="input-label">Количество боксов для обслуживания*</span>
                        <InputNumber className="input" placeholder="1" required/>
                    </Form.Item>
                    <Form.Item label="Контактный номер*" name="contactInfo">
                        <span className="input-label">Контактный номер*</span>
                        <Input className="input" placeholder="+7" required/>
                    </Form.Item>
                    <Form.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button className="form-submit-button" htmlType="submit">Добавить автомойку</Button>
                    </Form.Item>
                    <Form.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Button className="form-cancel-button" onClick={handleFormCancel}>Не добавлять</Button>
                    </Form.Item>
                </Form>
                </AutoCenter>
            </div>
        </div>
    )
}