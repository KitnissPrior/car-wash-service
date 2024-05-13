import React, { useState, useEffect } from 'react';

interface FormData {
    [stepId: string]: unknown;
}

interface StepData {
    title: string;
    id: string;
    content: React.ComponentType<{ data: FormData; onDataChange: (data: unknown) => void; shouldGoNext: (shouldGoNext: boolean) => void; }>;
    shouldValidate?: boolean;
}

interface MultiStepFormProps {
    stepData: StepData[];
    onSubmit: (data: FormData) => void;
}

const OrderForm: React.FC<MultiStepFormProps> = ({ stepData, onSubmit }) => {
    const [formData, setFormData] = useState({});
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        console.log('formData updated:', formData);
        // Здесь можно добавить дополнительную логику, например, проверку на валидность данных
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
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
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
