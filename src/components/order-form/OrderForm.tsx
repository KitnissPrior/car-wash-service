import { Guid } from 'guid-typescript';
import React, { useState, useEffect } from 'react';
import { OrderFormProps } from '../types';
import { Dialog } from 'antd-mobile';
import { useNavigate } from 'react-router-dom';

interface FormData {
    [stepId: string]: unknown;
    carwashId?: string | Guid;
    serviceId?: string | Guid;
    userId?: string | Guid;
    name?: string;
    phone?: string;
}

interface StepData {
    title: string;
    id: string;
    content: React.ComponentType<OrderFormProps>;
    shouldValidate?: boolean;
}

interface MultiStepFormProps {
    stepData: StepData[];
    onSubmit: (data: FormData) => void;
}

const OrderForm: React.FC<MultiStepFormProps> = ({ stepData, onSubmit }) => {
    const [formData, setFormData] = useState({});
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('formData updated:', formData);
    }, [formData]);

    const handleStepChange = (stepName: string, data: unknown) => {
        setFormData(prevData => ({
            ...prevData,
            [stepName]: data
        }));
    };

    const handleNext = () => {
        if (currentStep < stepData.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            onSubmit(formData);
            navigate("/home");
            Dialog.alert({ 
                title: 'Форма типа отправлена', 
                confirmText: 'ок'});
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
        if (currentStep === 0) {
            setFormData({});
        }
    };

    const CurrentStepContent = stepData[currentStep].content;

    return (
        <div>
            <CurrentStepContent
                data={formData}
                onDataChange={data => handleStepChange(stepData[currentStep].id, data)}
                shouldGoNext={shouldGoNext => {
                    if (stepData[currentStep].shouldValidate &&shouldGoNext) {
                        // Обработка валидации
                    } else {
                        handleNext();
                    }
                }}
            />
            {currentStep > 0 && <button onClick={handleBack}>Назад</button>}
            <button onClick={handleNext}>Далее</button>
        </div>
    );
};

export default OrderForm;
