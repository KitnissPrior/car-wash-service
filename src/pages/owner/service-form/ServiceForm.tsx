import {FC, useEffect, useState} from "react"
import { Button, Form, Input } from "antd"
import { useNavigate, useParams } from "react-router-dom"
import { Service } from "../../../components/types"
import './ServiceForm.scss'
import { useServiceAddMutation, useServiceQuery } from "../../../components/api/serviceApi"
import { useFormData } from "../carwash-form/CarwashFormContext"

export const ServiceForm: FC = () =>{
    const { formData: carwashData } = useFormData();

    const { mutateAsync: save } = useServiceAddMutation()
    const navigate = useNavigate();

    const [serviceDefaultValues, setServiceDefaultValues] = useState( {
         name: '',
         price: 0,
         duration: '0',
         carwashId: carwashData.carwashId,
         //status_ID : '1'
    })

    let formTitle = 'Добавление услуги';
    let submitButtonText = 'Добавить';
    let cancelButtonText = 'Не добавлять';
    
    const { serviceId } = useParams<{ serviceId?: string }>();

    if (serviceId) {
        //нижние три строчки перенести в обработчик...какой-нибудь
        const query = useServiceQuery(serviceId?.substring(1) || '')
        const { data: service} = query
        console.log(service)

        setServiceDefaultValues(service);
        formTitle = 'Редактирование услуги';
        submitButtonText = 'Сохранить';
        cancelButtonText = 'Не сохранять';
    }

    const handleFormCancel = () => {
        navigate(-1);
    }

    return (
        <>
            <div className="carwash-adding">
                <div className="carwash-adding-content2">
                    <h1 className="form-title">{formTitle}</h1>
                    <Form
                        onFinish={async (data) => {
                            console.log(data)
                            await save(data);
                            navigate(-1);
                        }}>
                        <Form.Item label="Название услуги*" name="name"
                            rules={[{ required: true,  message: 'Введите название услуги' },
                                { min: 3, message: 'Слишком короткое название'},
                                    { max: 100, message: 'Название должно содержать не более 100 символов'} ]}>
                            <div>
                                <span className="input-label">Название услуги*</span>
                                <Input.TextArea className="input" placeholder="Название" 
                                    defaultValue={serviceDefaultValues?.name} required/>
                            </div>
                        </Form.Item>

                        <Form.Item label="Стоимость (руб)*" name="price"
                            rules={[{ required: true,  message: 'Введите стоимость услуги' }]}>
                            <div>
                                <span className="input-label">Стоимость (руб)*</span>
                                <Input type="number" className="input" min="1" placeholder="0" 
                                    defaultValue={serviceDefaultValues?.price} required/>
                            </div>
                        </Form.Item>

                        <Form.Item label="Продолжительность услуги (мин)*" name="duration">
                            <div>
                                <span className="input-label">Продолжительность услуги (мин)*</span>
                                <Input type="number" className="input" min="5" placeholder="0" 
                                    defaultValue={serviceDefaultValues?.duration} required step={5}/>
                            </div>
                        </Form.Item>

                        <Form.Item name="statusId" hidden/>

                        <Form.Item name="carwashId" hidden/>

                        <Form.Item>
                            <Button className="form-submit-button" htmlType="submit">{submitButtonText}</Button>
                        </Form.Item>

                        <Form.Item>
                            <Button className="form-cancel-button" onClick={handleFormCancel}>{cancelButtonText}</Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    )
}