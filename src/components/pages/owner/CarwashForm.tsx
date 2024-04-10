import React, { useState } from "react"
import { FC} from "react"
import {Form, Button, Input, InputNumber, InputNumberProps} from "antd"
import './styles/CarwashAdding.scss'
import { HeaderOwner } from "../headers/HeaderOwner"
import { AutoCenter } from "antd-mobile"
import { useNavigate } from "react-router-dom"
import { useCarwashAddMutation } from "../../api/carwashApi"
import { Dialog } from "antd-mobile"
import { Carwash} from "../../types"
import { Controller, useForm, FormProvider, useFormContext } from "react-hook-form";
import { useFormData } from "./FormContext"

export const CarwashAdding: FC = () => {
    const { formData, setFormData} = useFormData();

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, name: e.target.value }));
     };

     const handleBoxAmountChange = (e: number | null) => {
        setFormData((prev) => ({ ...prev, boxAmount: Number(e) }));
     }

     const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, carwashStreet: e.target.value }));
     }

     const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, contactInfo: e.target.value }));
     }

    const navigate = useNavigate()

    const handleFormCancel = () => {
        navigate('/owner');
    }

    const handleContinue = () => {
        navigate('/service-adding');
    }

    return ( 
        <div className="carwash-adding">
            <div><HeaderOwner></HeaderOwner></div>
            <div className="carwash-adding-content2">
                <AutoCenter>
                <h1 style={{padding: '30px 50px', fontSize: '24px'}}>Добавление автомойки</h1>
                    <Form>
                        <Form.Item label="Название автомойки*" name="name" >
                            <span className="input-label">Название автомойки*</span>
                            <Input className="input" placeholder="Название" required 
                                defaultValue={formData.name} onChange={handleNameChange}/>
                        </Form.Item>
                        <Form.Item label="Адрес*" name="carwashStreet" >
                            <span className="input-label">Адрес*</span>
                            <Input.TextArea className="input" placeholder="Адрес" required 
                                defaultValue={formData.carwashStreet} onChange={handleAddressChange}/>
                        </Form.Item>
                        <Form.Item label="Количество боксов для обслуживания*" name="boxAmount">
                            <span className="input-label">Количество боксов для обслуживания*</span>
                            <InputNumber className="input" placeholder="1" required
                                defaultValue={formData.boxAmount} onChange={handleBoxAmountChange}/>
                        </Form.Item>
                        <Form.Item label="Контактный номер*" name="contactInfo">
                            <span className="input-label">Контактный номер*</span>
                            <Input className="input" placeholder="+7" required
                                defaultValue={formData.contactInfo} onChange={handleInfoChange}/>
                        </Form.Item>
                        <Form.Item style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                            <Button className="form-submit-button" onClick={handleContinue} htmlType="submit">Продолжить</Button>
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