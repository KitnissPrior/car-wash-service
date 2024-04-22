import {FC} from "react"
import { HeaderOwner } from "../headers/HeaderOwner"
import { Button, Form, Input} from "antd"
import { useNavigate } from "react-router-dom"
import { Service } from "../../components/types"
import './styles/ServiceAdding.scss'
import { useServiceAddMutation } from "../../components/api/serviceApi"
import { useFormData } from "./CarwashFormContext"

export const ServiceAddingForm: FC = () => {
    const { formData: carwashData } = useFormData();
    console.log(carwashData)

    const {mutateAsync: save} = useServiceAddMutation()

    const serviceDefaultValues: Service = {
        id: undefined,
        name: '',
        price: 0,
        time: '0',
        carwash_ID: carwashData.id,
        status_ID : '1'
    }

    const navigate = useNavigate();

    const handleFormCancel = () => {
        navigate(-1);
    }

    return (
        <div>
        <div><HeaderOwner></HeaderOwner></div>
        <div className="carwash-adding">
        <div className="carwash-adding-content2">
                <h1 className="form-title">Добавление услуги</h1>
                <Form 
                initialValues={serviceDefaultValues}
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
                            <Input.TextArea className="input" placeholder="Название" required
                            />
                        </div>
                    </Form.Item>
                    <Form.Item label="Стоимость (руб)*" name="price"
                    rules={[{ required: true,  message: 'Введите стоимость услуги' }]}>
                        <div>
                            <span className="input-label">Стоимость (руб)*</span>
                            <Input type="number" className="input" min="1" placeholder="0" required
                            />
                        </div>
                    </Form.Item>
                    <Form.Item label="Продолжительность услуги (мин)*" name="time">
                        <div>
                            <span className="input-label">Продолжительность услуги (мин)*</span>
                            <Input type="number" className="input" min="5" placeholder="0" required step={5}/>
                        </div>
                    </Form.Item>
                    <Form.Item name="status_ID" hidden/>
                    <Form.Item name="carwash_ID" hidden/>
                    <Form.Item>
                        <Button className="form-submit-button" htmlType="submit">Добавить</Button>
                    </Form.Item>
                    <Form.Item>
                        <Button className="form-cancel-button" onClick={handleFormCancel}>Не добавлять</Button>
                    </Form.Item>
                </Form>
            </div>
            </div>
        </div>
    )
}