import './BookingPage.scss';
import OrderForm from "../../../components/order-form/OrderForm";
import DateSelectionStep from "../../../components/order-form/DateSelectionStep";
import ServiceSelectionStep from "../../../components/order-form/ServiceSelection/ServiceSelectionStep";
import PersonalInfoStep from "../../../components/order-form/PersonalInfoStep";
import CarwashStep from '../../../components/order-form/CarwashSelection/CarwashSelectionStep';
import { TimeSelectionStep } from '../../../components/order-form/TimeSelectionStep';
import { useOrderAddMutation } from '../../../components/api/orderApi';
import { useNavigate } from 'react-router-dom';
import { Dialog } from 'antd-mobile';
import { Order, DateOnly } from '../../../components/types';
import { useAuthContext } from '../../../components/AuthContext';
import { Guid } from 'guid-typescript';

const stepData = [
    {
        title: "Выберите автомойку",
        id: "carwashSelection",
        content: CarwashStep,

    },
    {
        title: "Выберите услугу",
        id: "serviceSelection",
        content: ServiceSelectionStep,
    },
    {
        title: "Выберите дату",
        id: "dateSelection",
        content: DateSelectionStep,
    },
    {
        title: "Выберите время",
        id: "timeSelection",
        content: TimeSelectionStep,
    },
    {
        title: "Введите личную информацию",
        id: "personalInfoSelection",
        content: PersonalInfoStep,
    },
];

export default function BookingPage() {
    const navigate = useNavigate();
    const {userData} = useAuthContext();

    const handleSuccess = () => {
        navigate("/home");
        Dialog.alert({ 
            title: 'Форма типа отправлена', 
            confirmText: 'ок'});
    };
    
    const { mutateAsync: saveOrderData } = useOrderAddMutation(handleSuccess);
    
    
    const handleSubmit = async (data: any) => {

        const servicesIds = Array.isArray(data.serviceSelection.services)? 
            data.serviceSelection.services.map((service: any) => service as Guid) 
            : [data.serviceSelection.services as Guid];

        const dateObject = new Date(data.dateSelection.date);

        const year = dateObject.getFullYear();
        const month = dateObject.getMonth() + 1;
        const day = dateObject.getDate();
            
        // Создаем объект, аналогичный DateOnly в C#
        const date: DateOnly = {
            year,
            month,
            day
        };

        const order : Order = {
            //dateTime: date,
            carwashId: data.carwashSelection.carwashId as Guid,
            userId: userData.userId as Guid,
            servicesIds: servicesIds,
            licencePlate: data.personalInfoSelection.carNumber,
        }
        console.log(order)

        await saveOrderData(order);
    };

    return (
        <div className='booking-container'>
            <OrderForm stepData={stepData} onSubmit={handleSubmit} />
        </div>
    );
};
