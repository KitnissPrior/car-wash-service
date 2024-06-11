import './BookingPage.scss';
import OrderForm from "../../../components/order-form/OrderForm";
import DateSelectionStep from "../../../components/order-form/DateSelectionStep";
import ServiceSelectionStep from "../../../components/order-form/ServiceSelection/ServiceSelectionStep";
import PersonalInfoStep from "../../../components/order-form/PersonalInfoStep";
import CarwashStep from '../../../components/order-form/CarwashSelection/CarwashSelectionStep';
import { TimeSelectionStep } from '../../../components/order-form/TimeSelectionStep';

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
        id: "personalInfo",
        content: PersonalInfoStep,
    },
];

const handleSubmit = (data: any) => {
    console.log("Форма отправлена:", data);
};

export default function BookingPage() {

    return (
        <div className='booking-container'>
            <OrderForm stepData={stepData} onSubmit={handleSubmit} />
        </div>
    );
};
