import React, { useState } from "react"
import { FC} from "react"
import {Form, Button, Input, InputNumber} from "antd"
import './CarwashAdding.scss'
import { HeaderOwner } from "../../header/HeaderOwner"
import { AutoCenter } from "antd-mobile"

export const CarwashAdding: FC = () => {

    const handleFormSubmit = (values: any) => {
        console.log(values);
        
    };

    const handleFormCancel = () => {
        console.log('cancelled');
    }

    return (    
        <>
        <HeaderOwner></HeaderOwner>
            <AutoCenter style={{padding: '200px'}}>
            <h1>Добавление автомойки</h1>
            <Form onFinish={handleFormSubmit}>
                <Form.Item label="Название автомойки" name="name">
                    <Input placeholder="Название" />
                </Form.Item>
                <Form.Item label="Адрес" name="carwashStreet">
                    <Input.TextArea placeholder="Адрес" />
                </Form.Item>
                <Form.Item label="Количество боксов для обслуживания" name="boxAmount">
                    <InputNumber placeholder="1" />
                </Form.Item>
                <Form.Item label="Контактный номер" name="contactInfo">
                    <Input.TextArea placeholder="+7" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                    Продолжить
                    </Button>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" onClick={handleFormCancel}>
                    Не добавлять
                    </Button>
                </Form.Item>
            </Form>
            </AutoCenter>
        </>
    )
}