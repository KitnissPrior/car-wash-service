export type Carwash = {
    id: string | undefined;
    name: string;
    carwashStreet: string;
    boxAmount: number;
    contactInfo: string;
}

// export type CarwashFormData = {
//     name: string;
//     carwashStreet: string;
//     boxAmount: number;
//     contactInfo: string;
// }

export type FormContextProviderProps = {
    children: React.ReactNode;
}

export type ConfirmationProps = {
    title: string;
    visible: boolean;
    handleOk: () => void;
    handleCancel: () => void;
    okText: string;
    cancelText: string;
}

export type Service = {
    id: string | undefined;
    name: string;
    price: number;
    time: string;
    status_ID: string;
    carwash_ID: string;
}

export type ServiceStatus = {
    id: string;
    name: string;
}