import './BookingPage.scss';
import OrderForm from "../../../components/order-form/OrderForm";
import DateTimeSelectionStep from "../../../components/order-form/DateTimeSelectionStep";
import ServiceSelectionStep from "../../../components/order-form/ServiceSelection/ServiceSelectionStep";
import PersonalInfoStep from "../../../components/order-form/PersonalInfoStep";
import CarwashStep from '../../../components/order-form/CarwashSelection/CarwashSelectionStep';

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
        title: "Выберите дату и время",
        id: "dateTimeSelection",
        content: DateTimeSelectionStep,
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
