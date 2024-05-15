import React from "react"
import { FC} from "react"
import {Form, Button, Input} from "antd"
import './CarwashForm.scss'
import { HeaderOwner } from "../../headers/HeaderOwner"
import { useNavigate } from "react-router-dom"
import { useFormData } from "./CarwashFormContext"
import { useCarwashAddMutation } from "../../../components/api/carwashApi"
import { Carwash } from "../../../components/types"

export const CarwashAdding: FC = () => {
    const { formData, setFormData} = useFormData();

    const handleCarwashSuccessAdd = (data: Carwash) => {
        console.log(data)
        setFormData(data);
        navigate(`/carwashes/carwash-about/:${data.carwashId}`);
    }

    const {mutateAsync: save} = useCarwashAddMutation(handleCarwashSuccessAdd)

    //проверяет, что все поля формы заполнены. 
    //это нужно для того, чтобы кнопка "Продолжить" была активной
    const areValuesFilled = formData.name && formData.carwashStreet && formData.boxAmount && formData.contactInfo;
   
    const handleNameChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, name: e.target.value }));
     };

     const handleBoxAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prev) => ({ ...prev, boxAmount: Number(e.target.value) }));
     }

     const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, carwashStreet: e.target.value }));
     }

     const handleInfoChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData((prev) => ({ ...prev, contactInfo: e.target.value }));
     }

    const navigate = useNavigate()

    const handleFormCancel = () => {
        navigate('/carwashes');
    }

    const handleFormSubmit = async (carwashData: Carwash) => {
        await save(carwashData);
    }

    return ( 
        <div>
            <div><HeaderOwner/></div>
            <div className="carwash-adding">
            <div className="carwash-adding-content2">
                <h1 className="form-title">Добавление автомойки</h1>
                    <Form>
                        {<Form.Item name="carwashId" hidden/>}
                        <Form.Item label="Название автомойки*" name="name" 
                        rules={[{ required: true,  message: 'Введите название автомойки' },
                        { min: 3, message: 'Слишком короткое название'},
                        { max: 100, message: 'Название должно содержать не более 100 символов'} ]}>
                            <div>
                                <span className="input-label">Название автомойки*</span>
                                <Input.TextArea className="input" placeholder="Название"
                                    defaultValue={formData.name} onChange={handleNameChange}/>
                            </div>
                        </Form.Item>
                        <Form.Item label="Адрес*" name="carwashStreet"
                        rules={[{ required: true,  message: 'Введите адрес' },
                        { min: 5, message: 'Слишком короткий адрес'},
                        { max: 100, message: 'Адрес должен содержать не более 100 символов'} ]}>
                            <div>
                                <span className="input-label">Адрес*</span>
                                <Input.TextArea className="input" placeholder="Адрес"
                                    minLength={5} maxLength={100}
                                    defaultValue={formData.carwashStreet} onChange={handleAddressChange}/>
                            </div>
                        </Form.Item>
                        <Form.Item label="Количество боксов для обслуживания*" name="boxAmount"
                        rules={[{ required: true,  message: 'Введите количество боксов' },
                        { min: 1, message: 'Количество боксов должно быть не меньше 1'},
                        { max: 100, message: 'Количество боксов должно быть не больше 100'} ]}>
                            <div>
                                <span className="input-label">Количество боксов для обслуживания*</span>
                                <Input type="number" className="input" min="1" max="100" placeholder="0"
                                    defaultValue={formData.boxAmount} onChange={handleBoxAmountChange}/>
                            </div>
                        </Form.Item>
                        <Form.Item label="Контактный номер*" name="contactInfo"
                        rules={[{ required: true,  message: 'Введите контактный номер' },
                         ]}>
                            <div>
                                <span className="input-label">Контактный номер*</span>
                                <Input className="input" placeholder="+7"
                                    defaultValue={formData.contactInfo} onChange={handleInfoChange}/>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button className="form-submit-button" 
                            disabled={!areValuesFilled} 
                            onClick={() => handleFormSubmit(formData)}
                            htmlType="submit">Сохранить</Button>
                        </Form.Item>
                        <Form.Item>
                            <Button className="form-cancel-button" onClick={handleFormCancel}>Не сохранять</Button>
                        </Form.Item>
                    </Form>
                    </div>
            </div>
        </div>
    )
}